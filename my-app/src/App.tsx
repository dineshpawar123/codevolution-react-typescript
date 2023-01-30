import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonListComponentNew from './components/personListComponentNew';
import Status from './components/Status';
import HeadingChildren from './components/HeadingChildren';
import OscarNew from './components/OscarNew';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import User from './components/state/User';
import Counter from './components/state/Counter';
import {ThemeContextProvider} from './components/context/ThemeContext';
import Box from './components/context/Box';
import UserNew from './components/context/User';
import {UserContextProvider} from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import {MutableRef} from './components/ref/MutableRef';
import {CounterNew} from './components/class/Counter';
import { Private } from './components/auth/Private';
import {Profile} from './components/auth/Profile';
import {List} from './components/generics/List';
import {RandomNumber} from './components/restriction/RandomNumber';

function App() {

  const personName = {
    firstName:'dinesh',
    lastName:'pawar'
  }

  const personList = [
    {
      firstName:'dinesh',
      lastName:'pawar'
    },
    {
      firstName:'ganesh',
      lastName:'pawar'
    },
    {
      firstName:'mahesh',
      lastName:'pawar'
    }
  ]

  return (
    <div className="App">
      <Greet name={'dinesh'} messageCount={20} isLoggedIn={true}/>
      <Greet name={'dinesh'} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonListComponentNew list={personList}/>
      <Status status='error' statusSecond='success' />
      <HeadingChildren>{'This is children'}</HeadingChildren>
      <OscarNew><HeadingChildren>{'This is children fro oscar'}</HeadingChildren></OscarNew>
      <Button handleClick={(event,id)=>{
        console.log('Button click',event,id)
      }}/>
      <Input value={2} handleChange={(event)=>console.log(event)}/>
      <Container style={{border:'1px solid black',padding:'1rem'}}/>
      <User/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <UserNew/>
      </UserContextProvider>
      <DomRef/>
      <MutableRef/>
      <CounterNew message="my message"/>
      <Private isLoggedIn={true} Component={Profile}/>
      {/* <List items={['Batman','Superman','wonder Woman']}
        onClick={(item)=>console.log(item)}
      />
         <List items={[1,2,3]}
        onClick={(item)=>console.log(item)}
      /> */}
         <List items={
          [{id:1,first:'d',last:'p'},{id:2,first:'s',last:'p'}]}
        onClick={(item)=>console.log(item)}
      />
      <RandomNumber value={10} isPositive/>
      </div>
  );  
}

export default App;
