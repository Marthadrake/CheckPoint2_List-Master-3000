import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ``
    let lists = _listService.List

    lists.forEach((list, index) => {
        template += list.Template
    })
    document.querySelector("#list").innerHTML = template

}


//Public
export default class ListController {
    constructor() {
        console.log("hello from controller")
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }


    debugger
    addList(event) {
        event.preventDefault()
        let form = event.target

        let newList = {
            todList: form.todList.value
            todayTodo: form.todayTodo.value
            tomorrowTodo: form.tomorrowTodo.value
            notTodo: form.notTodo.value
        }
    }
    _listService.addList(newList)
    _drawLists()
}
    //TODO: Your app will need the ability to create, and delete both lists and listItems
