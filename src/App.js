import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box'
class App extends React.Component {
   
  constructor(props){
    super(props);
   
    this.state = {
        monsters: [],
        searchField: ''
    }
  }
  
   handleChange = (e) => {
     this.setState({searchField: e.target.value})
   }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}))
  }

  render(){
    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search mosters' handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
  }

export default App;
