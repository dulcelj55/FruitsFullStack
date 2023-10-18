import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react"
const Fruits = () => {
    const [ fruits, setFruits ] = useState([]);
    useEffect(()=>{
        axios({
            method: "GET",
            url: "/fruits",
        }).then((res)=>{
            console.log(res.data);
            setFruits(res.data)
        })
    },[])


  return (
    <div>Show all fruits:
    {fruits.map((fruit) => 
    <div key={JSON.stringify(fruit)}>{fruit.name} {fruit.color}  {fruit.age}</div>)}
     </div>
  )
}
export default Fruits