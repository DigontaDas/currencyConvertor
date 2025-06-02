import { useState } from 'react'
import './App.css'
import { Inputbox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setForm]= useState('usd')
  const [to, setTo] = useState('inr')
  const[convertedAmount, setConvertedAmount] = useState(0)
  const currencyinfo=useCurrencyInfo(from)
  const options=Object.keys(currencyinfo)
  const swap=()=>{
    setForm(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert =()=> 
    {setConvertedAmount(amount * currencyinfo[to] )}
    return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="p-6 rounded-xl shadow-lg bg-black">
        <h1 className="text-2xl font-bold text-white text-center mb-5">
          Currency Converter
        </h1>
        <img
          src="https://imgs.search.brave.com/6BPbXc6s6aAFNKVlxJoG_xbfHgFIfIPef1MvRoAdmZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzc1MDA1MS9waG90/by9sYXJnZS1tYW4t/bWFraW5nLWZ1bm55/LXN1cnByaXNlZC1m/YWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cXdrQS04/YnpLU1dTeHNFMXNS/VWNGWWo3QjBPZFFp/N1E4d29lRTBoQnZn/PQ"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        </div>
        <div className="w-full " >
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Inputbox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Inputbox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default App
