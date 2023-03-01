import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [todo, useTodo] = useState([])
  
  
  const getData = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(res=>{
      return res.data;
    })
    .catch(err=>console.log(err));
    console.log(data);
    localStorage.setItem('todo', JSON.stringify(data));
    count()
    getCacheData()
  };
  
  const count = () => {
    for(let i=0; i<=5; i++ ){
      console.log(i);
    }
  }

  const getCacheData = async () =>{
    await delay(4000) // wait 4 seconds for local storage
    const data =  localStorage.getItem('todo');
    console.log(data);
  }


  const delay = (ms) => {
    return new Promise(resolve=>setTimeout(resolve, ms));
  }


  const waitForPromise = async () => {
    console.log("Iniciando temporizador 1...");
    await delay(2000); // wait 2 seconds
    console.log("Temporizador 1 finalizado.");

    console.log("Iniciando temporizador 2...");
    await delay(5000); // wait 5 seconds
    console.log("Temporizador 2 finalizado.");

    await getData()
    

  }

  useEffect(() => {
    
    
    // getData();
    // getCacheData();
    waitForPromise();
    return () => {
      
    }
  }, [])
  

  return (
    <div className="App">
    
    </div>
  )
}

export default App
