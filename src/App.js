import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItem:'',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      // +array ES6, seperti concat
      items: [...this.state.items, this.state.todoItem],
      todoItem:''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>Add</button>
          <List items={this.state.items}/>
        </form>
      </div>
    )
  }
}

export default App;

