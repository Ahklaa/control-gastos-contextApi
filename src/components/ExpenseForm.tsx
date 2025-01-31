import { categories } from "../data/category";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import type { DraftExpense } from "../types";
const [expense,setExpense] = useState<DraftExpense>({
    expenseName : "",
    amount : 0,
    category : "",
    date : new Date()

})
export default function ExpenseForm() {
  return (
    <form className="space-y-5">
        <legend className="text-2xl font-black text-center border-b-4 border-blue-500 p-2 uppercase">Nuevo Gasto</legend>
        <div className="flex flex-col gap-2">
            <label htmlFor="spentName" className="text-xl">Nombre Gasto:</label>
            <input 
            className="bg-slate-100 p-2"
            type="text"
            name="expenseName"
            id="spentName"
            placeholder="Añade el nombre del gasto"
            value = {expense.expenseName}
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-xl">Cantidad:</label>
            <input 
            className="bg-slate-100 p-2"
            type="number"
            name="amount"
            id="amount"
            placeholder="Añade el valor del gasto. Ej. 200"
            value = {expense.amount}
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-xl">Cantidad:</label>
            <select className="bg-slate-100 p-2" value={expense.category}>
                <option value={""}>Selecciona una categoria</option>
                {categories.map(category => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                ))}
            </select>   
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-xl">Nombre Gasto:</label>
            <DatePicker
                value={expense.date} />
        </div>
        <button className="w-full bg-blue-500 uppercase rounded-lg text-white font-bold hover:bg-blue-600 p-2">Registrar Gasto</button>
    </form>
  )
}
