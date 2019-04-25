import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons:[
      {id: 'per1',name:'Johnatan', age: 34},
      {id: 'per2',name:'Caro', age: 36},
      {id: 'per3',name:'Gloria', age: 54}
    ],
    otherState: 'some other value',
    showPersons: false
  }

    nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons})
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  
  render() {
// Inline styles... like the following => 'const style'
    const style={
      backgroundColor: 'green',
      color: 'white',
      font: 'inhreit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer',
      
    };

    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={()=> this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      style.backgroundColor ='red';
     
    }
    let classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      
      <div className="App">
        <h1> Hi, I'm a React </h1>
        <p className= {classes.join(' ')}> This is really Good!</p>
        <button
        //Inline style applied here... 
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
          {persons}
             
            </div>
       
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, Is this Working now... I\'m a React App!!!!') )

        }
  }
  // switchNameHandler = (newName) => {

  //   // console.log('Was Clicked!!');
  //   // DON'T Do This : this.state.persons[0].name = 'Johnny';
  //   this.setState({
  //     persons:[
  //      {name: newName, age: 34},
  //      {name:'Caro', age: 36},
  //      {name:'Gloria', age: 55}
  //    ]
  //   })
  //  }

export default App;
