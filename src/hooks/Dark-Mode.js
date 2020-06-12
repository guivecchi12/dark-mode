import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (iValue, key) => {
    const [value, setValue] = useLocalStorage(iValue, key);
    const body = document.querySelector("body");

    console.log(iValue);
    console.log(value);

    useEffect(()=>{
        if(value){
            console.log("darkmode On");
            body.classList.toggle("dark-mode");
        }
        else{
            console.log("darkmode Off");
            body.classList.remove("dark-mode");
        }
    }, [value]);
    
    const toggleMode = () => {
        // e.preventDefault();
        // console.log(value);
        setValue(!value);
    };

    return [value, toggleMode];
}