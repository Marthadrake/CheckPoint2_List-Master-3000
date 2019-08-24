

export default class List {
    //TODO You will need to create a constructor 
    constructor(data) {
        console.log("Hello from list")
        this._id = data._id
        this.todoList = data.todoList
        this.todayTodo = data.todayTodo
        this.tomorrowTodo = data.tomorrowTodo
        this.notTodo = data.notTodo

    }
    //and the methods needed to create the view template for this model
    get Template(index) {
        let template =
            `
                <div class="col-4 border">
                    <h1>${this.todoList}
                        <ul>`
        template += this.drawDlists(index)
        template += `
                        </ul>
                            <form onsubmit="app.controllers.listControllers.addDlist(event, ${index}">
                            <div class="form-group">
                                <label for="list">dlist</label>
                                <input type="text" class="form-control" name="dlist" placeholder="daily llist">
                                <button type="submit"></button>
                                </div>
                            </form>
                                <button type="button" onclick="app.controllers.listControllers.deleteDailyList(${index})">delete</button>
                            </div>
                    </h1>
                    <h1>${this.todayTodo}
                        <ul>`
        template += this.drawDlists(index)
        template += `
                        </ul>
                            <form onsubmit="app.controllers.listControllers.addDlist(event,${index}">
                            <div class="form-group">
                                <label for="list">dlist</label>
                                <input type="text" class="form-control" name="dlist" placeholder="daily llist">
                                <button type="submit"></button>
                                </div>
                            </form>
                                <button type="button" onclick="app.controllers.listControllers.deleteDailyList(${index})">delete</button>
                            </div>
                    </h1>

                    <h1>${this.tomorrowTodo}
                        <ul>`
        template += this.drawDlists(index)
        template += `
                        </ul>
                            <form onsubmit="app.controllers.listControllers.addDlist(event,${index}">
                            <div class="form-group">
                                <label for="list">dlist</label>
                                <input type="text" class="form-control" name="dlist" placeholder="daily llist">
                                <button type="submit"></button>
                                </div>
                            </form>
                                <button type="button" onclick="app.controllers.listControllers.deleteDailyList(${index})">delete</button>
                            </div>
                    </h1>

                    <h1>${this.notTodo}
                        <ul>`
        template += this.drawDlists(index)
        template += `
                        </ul>
                            <form onsubmit="app.controllers.listControllers.addDlist(event,${index}">
                            <div class="form-group">
                                <label for="list">dlist</label>
                                <input type="text" class="form-control" name="dlist" placeholder="daily llist">
                                <button type="submit"></button>
                                </div>
                            </form>
                                <button type="button" onclick="app.controllers.listControllers.deleteDailyList(${index})">delete</button>
                            </div>
                    </h1>
                    <button class="btn btn-danger" onclick="app.controllers.listControllers.deleteList(${this._id}"></button>
                </div>
            `
        return template
    }
    drawDlists(dailyIndex)
    let dlistTemplate = ""
this.dlists.forEach(d, dlistIndex) => {
    dlistTemplate += `
        <li>${d}<span onclick="app.controllers.listContollers.deleteDlist(${listIndex}, ${listIndex})">Delete</span></li>
        `
});

return dlistTemplate
}