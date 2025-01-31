import { useState } from 'react'
import './App.css'
import InputBox from './component/IN'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount] = useState()
  const [From,setFrom]=useState("usd")
  const [To,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState();

  const currencyInfo=useCurrencyInfo(From)
  const options=Object.keys(currencyInfo)
  // console.log("options:",options)
  const background="https://picsum.photos/1920/1200";
  const convert=()=>{
    if(currencyInfo && currencyInfo[To]){
    setConvertedAmount(Math.round(amount*currencyInfo[To]));
    console.log(convertedAmount)
    }
    else{
      console.log("conversion rates not available")
    }
  }
  function swap(){
    setFrom(To);
    setTo(From)
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }
  return (
  <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ' style={{backgroundImage:`url(${background})`}}>
    <div class="flex items-center justify-center min-h-screen">
    {/* <div class="text-center flex">
        <p class="text-white text-6xl font-bold">Currency</p>
        <p class="text-gray-400 text-6xl font-bold">Your Dream Job</p>
    </div> */}
</div>
    <div className='w-full max-w-md bg-white mx-auto border rounded-lg p-5 backdrop-blur-sm'>
    <p className='text-center's>Currency Converter</p>
      <form onSubmit={(e)=>{
            e.preventDefault();
            convert();
      }}>
            <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount)=>setAmount(amount)}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              selectCurrency={From}
              />
            </div>
            <div className='bg-blue-500 px-2 text-center absolute left-1/2 -translate-x-1/2 border-2 border-white rounded-md text-white py-0.5 text-sm hover:bg-blue-600'>
              <button type='button' className='cursor-pointer' onClick={swap}>swap</button>
            </div>
            <div className='w-full mb-2'>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={To}
              amountDisable="true"
              />
            </div>
            <div className="flex items-center justify-center ">
            <button class="px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-lg 
shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                  Convert {From.toUpperCase()} to {To.toUpperCase()}
              </button>
            </div>

      </form>
    </div>
  </div>
  )
}

export default App
