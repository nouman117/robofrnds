import React,{Component} from 'react';
//import App from './App';
//import robots from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class  App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchField:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({ robots: users}));
		
	}
	onSearchChange =(event)=>{
		this.setState({searchField: event.target.value})
		
	

	}
	render(){
			const{robots,searchField} = this.state;
			const filteredRobots= robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
			return !robots.length?
				<h1> LOADING</h1>:
			
			    (
					<div class= 'tc'>
						<h1 class='f1'> RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<hr/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
					</div>	
		    );

		


		
	}	
}
export default App;