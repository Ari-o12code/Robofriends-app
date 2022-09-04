import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'


const App = () => {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(()=>{
        console.log('ran')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filterRobots = robots.filter (robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

  return (
    !robots.length? <h1>loading...</h1>:
    <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <CardList robots={filterRobots}/>
        </Scroll>
    </div>
  )
}

export default App


// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             robots: [],
//             searchField: ''
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=> response.json())
//         .then(users => this.setState({robots: users}));
//     }

//     onSearchChange = (event) => {
//         this.setState({searchField: event.target.value})
//     }
//     render(){
//             const {robots, searchField} = this.state;
//             const filterRobots = robots.filter (robot =>{
//                 return robot.name.toLowerCase().includes(searchField.toLowerCase());
//             })
//             return (!robots.length? <h1>loading...</h1>:
//                         <div className="tc">
//                             <h1 className="f2">RoboFriends</h1>
//                             <SearchBox searchChange={this.onSearchChange}/>
//                             <Scroll>
//                                 <CardList robots={filterRobots}/>
//                             </Scroll>
//                         </div>
//                     )
//     }
// }

// export default App;