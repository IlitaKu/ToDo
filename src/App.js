import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Categories.js'
import TaskList from './TaskList';



class App extends React.Component {


  state = {
    category: CATEGORIES[0],
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }

    ]
  }

 onClickFunction= (name) => {
    // this.setState((state, name) => {
      this.setState({
        category: name
      });
    console.log(this.state)
  }

  // onSaveNewTaskFunction= (newtask) => {
  //   // this.setState((state, name) => {
  //     this.setState({
  //       tasks: [...this.state.tasks, newtask]
  //     });
  //   console.log(this.state)
  // }


  render() {
    return (
      <div className="App">
      <div className="categories">
        <h5> To Do tasks: <Categories categories={CATEGORIES} onClickFunction={this.onClickFunction}/> </h5>
        <TaskList selectedName={this.state.category} taskList={this.state.tasks} defaultCategory={CATEGORIES[0]}/>
        {/* board 2 arguments selected category and this.sate.category and second argument tasks list state.tasks */}
      </div>
    </div>
    );
  }
}


export default App;
