import { useState } from "react"
import Rifat from "./Post"
import './Post.css'
export default function Rony(){
    const[rohan, setRohan] =useState([])
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setRohan(data))
    return(
        <div className="box">
            <h3 className="box">Post: {rohan.length}</h3>
            {
                rohan.map(s => <Rifat Jihana={s}></Rifat>)
            }
        </div>
    )
}