import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectApi() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Mounting Phase
        fetchData();
    })

    // const fetchData = async () => {
    //     await fetch("https://jsonplaceholder.typicode.com/users/1")
    //         .then(res => res.json())
    //     .then(data=>setUserData(data))
    // }

    const fetchData = async () => {
        try {
           const response = await axios.get(
             "https://jsonplaceholder.typicode.com/users/1"
            );
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <div>
          {userData.name}
          {userData.email}
          {userData.phone}
          {userData.website}
    </div>
  )
}

export default UseEffectApi