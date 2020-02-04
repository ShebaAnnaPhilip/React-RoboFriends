import React, { Component } from 'react';
import CardList from './Components/CardList';
import { robots } from './robolist'
import SearchBox from './Components/SearchBox';

export class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield:''
        }
    }

    onSearchChange =(event) =>{
        console.log(event.target.value);
        
        this.setState({searchfield: event.target.value}) 
        
        //console.log(filteredRobots);
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h2>Robo Friend List</h2>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
    
        )
    }
    
}

export default App