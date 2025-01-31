import {useEffect,useState} from 'react';

function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    //empty object to avoid error so that atlease
    //  it can return empty object
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res) => {
            console.log("Fetched Response:", res); // Debug: Log full response
            if (res[currency]) {
                setData(res[currency]); // Set only the relevant currency data
            } else {
                console.error("Invalid API response structure:", res);
            }
        })
        .catch((error)=>console.log("my error:",error))
    },[currency])
    return data;
}
export default useCurrencyInfo