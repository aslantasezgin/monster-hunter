import './App.css';
import React from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';






const App = () => {


  const [searchField, setSearchfield] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonster, setFilteredMonster] = useState(monsters)
  const [stringField, setStringfield] = useState('')


  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users))

  }, [])

  
 
 
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchfield(searchFieldString) 
  }
  
 
 

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonster(newFilteredMonsters)

  },[monsters, searchField])
 


  return(
    <div className='App'>
       <h1 className='app-title'>MONSTER HUNTER FOR BTCINK </h1>
       <SearchBox onChangeHandler={onSearchChange}
        placeholder={"Search Monster"} 
        type={"search"} 
        className={"monster-search-box"} />


       <CardList  monsters={filteredMonster}  />


    </div>
  )

}




/*

class App extends Component {

  constructor(){
    super();


    this.state={
      monsters:[],
      searchField : ''  
    }

  }


    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>  this.setState(() => {
        return {monsters:users}
      }
      
      ) )
    }
   


    onSearchChange = (event) => {
    
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
          return {searchField}
        })
    }
    
  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonster = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField)
    })

  return (
    <div className="App">
          <h1 className='app-title'>MONSTER HUNTER FOR BTCINK </h1>
        <CardList  monsters={filteredMonster}  />
      
    </div>
  );
}
}

*/


export default App;
