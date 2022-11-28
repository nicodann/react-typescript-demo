
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

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
      <Greet  name='Vishwas' isLoggedIn={false}/>
      <Button 
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={event => console.log('event')}/>
      <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
      <LoggedIn/>
      <User/>
    </div>
  );
}

export default App;
