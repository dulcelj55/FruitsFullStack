import {useEffect, useState} from 'react'
import axios from 'axios'

const Veggies = () => {
const [veggies, setVeggies]= useState([])


    useEffect(()=>{
        axios({
            method:"GET",
            url: "/server/veggie"
        }).then((res)=>{
            setVeggies(res.data)
        })
    })
  return (
    <div>Veggies
        
        {veggies.map((veggie)=>{
            return <div key ={veggie._id}>{veggie.name}</div>
        })}
        
        
        
        </div>
  )
}

export default Veggies