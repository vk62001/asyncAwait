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


  const countSecond1 = (i) => {
    return new Promise ((resolve)=>{

    
    if(i<6){
      setTimeout(()=>{
        console.log(i, 'count 1');
        i++
        countSecond1(i);
      }, 1000);
    }
      resolve(true);
  })
  }

  const countSecond2 = (i) => {
    return new Promise((resolve)=>{
      if(i<10){
        setTimeout(()=>{
          console.log(i, 'count 2')
          i++
          countSecond2(i);
        }, 1000);
      }
        resolve(true)
    })
  }

  const waitForPromise = async () => {
    // countSecond1(1)
    // countSecond2(1)
    const something = await Promise.all([countSecond1(1), countSecond2(2)])
    console.log(something)
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
