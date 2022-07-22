import React, { useState, useEffect} from 'react'

export default function Usefetch(url) {
    const [ data, setData ] = useState([]);
    const [ padding, setPadding] = useState(true)

    useEffect(() =>{
        fetch(url)
            .then((res) =>{
                return res.json()
            })
            .then(data => setData(data))
            .catch(err => console.log(err))
    },[])

    return { data, padding }
}
