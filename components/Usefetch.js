import React, { useState, useEffect} from 'react'

export default function Usefetch(url) {
    const [ data, setData ] = useState(null);
    const [ padding, setPadding] = useState(true)

    useEffect(() =>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url,{
            signal: signal
        })
            .then((res) =>{
                return res.json()
            })
            .then(data => {
                setData(data)
                setPadding(false)
            })
            .catch(err => console.log(err))

            return () => controller.abort();
    },[])

    return { data, padding }
}
