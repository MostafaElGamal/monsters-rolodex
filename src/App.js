import { useState, useEffect } from 'react';

import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.css';

const App = () => {
  console.log('renderd');
  const [searchText, setSearchText] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterdMonsters, setFilterdMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const filterdMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchText));
    setFilterdMonsters(filterdMonsters);
  }, [monsters, searchText]);

  const onSearchChangeHandler = (event) => {
    setSearchText(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox onSearchChangeHandler={onSearchChangeHandler} />
      <br />
      <SearchBox onSearchChangeHandler={(e) => setTitle(e.target.value)} />
      <CardList monsters={filterdMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchText: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   render() {
//     const { monsters, searchText } = this.state;
//     const { onSearchChangeHandler } = this;
//     const filterdMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchText));

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onSearchChangeHandler={onSearchChangeHandler} />
//         <CardList monsters={filterdMonsters} />
//       </div>
//     );
//   }

//   onSearchChangeHandler = (event) => {
//     this.setState(() => {
//       return {
//         searchText: event.target.value.toLocaleLowerCase(),
//       };
//     });
//   };
// }

export default App;
