import { useState, ChangeEvent } from "react"
export default function BudgetForm() {
    const [budget, setButget] = useState(0)
    const handleChange = (e  : ChangeEvent<HTMLInputElement>) => {
        setButget(+e.target.value)
    }
  return (
    <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-950 text-center font-bold">Definir presupuesto</label>
                <input 
                type="number" 
                className="w-full bg-white border border-gray-200 p-2" 
                placeholder="Ingresa el valor del presupuesto" 
                id="budgetId" 
                name="budget" 
                value = {budget}
                onChange={handleChange}
                />
            </div>
            <input type="submit" className="bg-blue-700 hover:bg-blue-800 cursor-pointer p-2 uppercase font-black text-white w-full" value="Definir Presupuesto" />
    </form>
  )
}
