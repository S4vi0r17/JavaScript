import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import Button from './components/Button'
import { formatMoney, calculateTotal } from './helpers'

function App() {

    const [quantity, setQuantity] = useState(10000)
    const [plan, setPlan] = useState(6)
    const [total, setTotal] = useState(0)
    const [monthly, setMonthly] = useState(0)

    useEffect(() => {
        setTotal(calculateTotal(quantity, plan))
        // setMonthly(total / plan) // Add total to the dependency array
    }, [quantity, plan])

    useEffect(() => {
        setMonthly(total / plan)
    }, [total, plan])

    const MIN = 0
    const MAX = 20000
    const STEP = 100

    const handleRangeChange = (e) => {
        // console.log(Number(e.target.value))
        setQuantity(Number(e.target.value))
    }

    const handleDecrement = () => {
        if (quantity > MIN) {
            setQuantity(quantity - STEP)
        }
    }

    const handleIncrement = () => {
        if (quantity < MAX) {
            setQuantity(quantity + STEP)
        }
    }

    return (

        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

            <Header />

            <div className="flex justify-between items-center my-6">
                <Button handle={handleDecrement}>-</Button>
                <Button handle={handleIncrement}>+</Button>
            </div>

            <input
                type="range"
                className="mt-5 w-full h-6 accent-mauve hover:accent-mauve"
                onChange={handleRangeChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={quantity}
            />

            <p
                className="text-center my-10 text-5xl font-extrabold text-mauve">
                {formatMoney(quantity)}
            </p>

            <h2
                className="text-center text-2xl font-bold text-gray-500"
            >
                Select your <span className='text-mauve'>plan</span>
            </h2>

            <select
                className='mt-5 w-full h-10 text-center text-xl font-bold text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200'
                value={plan}
                onChange={(e) => setPlan(Number(e.target.value))}
            >
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
            </select>

            <div
                className="my-5 space-y-3 text-center bg-gray-50 p-5"
            >
                <h2 className="text-center text-2xl font-bold text-gray-500"
                ><span className='text-lightPink'>Payment</span> details</h2>

                <p className="text-center text-xl font-bold text-gray-500"
                >{plan} months</p>

                <p className="text-center text-xl font-bold text-gray-500"
                // >{formatMoney(total / plan)} / month</p>
                >{formatMoney(monthly)} / month</p>

                <p className="text-center text-xl font-bold text-gray-500"
                >Total: {formatMoney(total)}</p>

            </div>

        </div>
    )
}

export default App
