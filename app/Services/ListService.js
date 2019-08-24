import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ListService {
    delete

    addList(newList) {
        _state.lists.push(new List(newList))
        this.List = ()
    }
    constructor() {
        console.log("hello from service");
    }
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?




    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
            localStorage.setItem("lists", JSON.stringify(_state.lists))
        }

        //NOTE this method will get the lists from local storage at the start of the app
        get new List() {
            return _state.lists.map(list => new List(list))
        }
    }
}
