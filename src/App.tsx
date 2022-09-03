
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clarke',
      last: 'Kent'
    },
    {
      first: 'Pricess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name='Vishwas' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='success'/>
    </div>
  );
}

export default App;
