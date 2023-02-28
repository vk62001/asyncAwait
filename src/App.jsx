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

  const getCacheData = () =>{
    const data =  localStorage.getItem('todo');
    console.log(data);
  }

  useEffect(() => {
    
    
    getData();
    // getCacheData();
    return () => {
      
    }
  }, [])
  

  return (
    <div className="App">
    
    </div>
  )
}

export default App
