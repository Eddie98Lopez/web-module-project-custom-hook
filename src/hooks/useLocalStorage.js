import {useState} from 'react'

export const useLocalStorage = (key,initialValue) => {

    const[value,setValue] = useState(()=>{

        const alreadyThere = window.localStorage.getItem(key)
        return( alreadyThere ? JSON.parse(alreadyThere) : initialValue)
    })

    const saveToLocal = (value)=>{

        setValue(value)
        window.localStorage.setItem(key,JSON.stringify(value))

    }


    return [value,saveToLocal]

}


