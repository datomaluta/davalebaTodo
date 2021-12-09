import React from "react";



export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        newItem:"",
        list:[],
        
    }
  }

  updateInput(key, value) {
      this.setState({
          [key]:value
      })
  }


  addItem(){

      const newItem={
          id: 1+Math.random(),
          value: this.state.newItem.slice()
      };

      const list = [...this.state.list];

      list.push(newItem);

      this.setState({
          list,
          newItem:""
      });
  }

  deleteItem(id) {
      const list = [...this.state.list];

      const updatedList = list.filter(item => item.id !== id);

      this.setState({list: updatedList});
  }
  
  doneItem(id) {
    const list = [...this.state.list];
    const item = list.filter(element => element.id === id)
    item["isDone"] = true;
    document.getElementById(item[0].id).style.color = "green";


  }

  deleteAll() {
    const emptyList = []
    this.setState({list:emptyList})
  }

  render() {
    return (
      <div>
          <h1 className="todoTitle">MY TODO LIST</h1>
        
        <br />
        <input className="inputClass" type="text" placeholder="Type Task here..." 
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button className="addButton" onClick={() => this.addItem()}>Add</button>
        <button className="deleteAllButton" onClick={() => this.deleteAll()}>Delete All</button>

        <br />
        <ul>
            {this.state.list.map(item => {
                return(
                    <li id={item.id} className="liClass" key={item.id}>
                        {item.value}
                        <button className="deleteButton" onClick={() => this.deleteItem(item.id)}>Delete</button>
                        <button className="doneClass" onClick={()=> this.doneItem(item.id)}>Done</button>
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}
