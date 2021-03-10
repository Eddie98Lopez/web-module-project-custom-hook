import {useLocalStorage} from './useLocalStorage'

export const useDark = (initialValue) => {

    const [dark,setDark] = useLocalStorage('dark-theme',initialValue)

    return[dark,setDark]


}