
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

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
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Leonardo Dicaprio!
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
