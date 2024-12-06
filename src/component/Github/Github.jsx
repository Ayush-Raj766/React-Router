import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setdata] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Ayush-Raj766")
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // })
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github follower:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

 export const githubinfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/Ayush-Raj766')

    return res.json()
 }
