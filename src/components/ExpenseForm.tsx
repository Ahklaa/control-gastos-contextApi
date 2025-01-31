import { categories } from "../data/category";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css';
import { ChangeEvent, FormEvent, useState } from "react";
import type { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";
export default function ExpenseForm() {
    const {dispatch} = useBudget()
    const [expense,setExpense] = useState<DraftExpense>({
        expenseName : "",
        amount : 0,
        category : "",
        date : new Date()
    
    })
    const [error,setError] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {
        const {name,value} = e.target
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name] : isAmountField ? +value : value
        })        

    }
    const handleChangeDate = (value : Value) => {
        setExpense({
            ...expense,
            date : value
        })
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if (Object.values(expense).includes("") || Object.values(expense).includes(0)){
            setError("Todos los campo son obligatorios")
            return
        }
        
        //agregar gasto
        dispatch({type : 'add-expense', payload : {expense}})
    }
    
  return (
    <form className="space-y-5" onSubmit={handleSubmit 

    }>
        <legend className="text-2xl font-black text-center border-b-4 border-blue-500 p-2 uppercase">Nuevo Gasto</legend>
        {error && (
            <ErrorMessage>
                {error}
            </ErrorMessage>
        )}
        <div className="flex flex-col gap-2">
            <label htmlFor="expenseName" className="text-xl">Nombre Gasto:</label>
            <input 
            className="bg-slate-100 p-2"
            type="text"
            name="expenseName"
            id="expenseName"
            placeholder="Añade el nombre del gasto"
            value = {expense.expenseName}
            onChange={handleChange}
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
            onChange={handleChange}
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-xl">Categoria:</label>
            <select 
            className="bg-slate-100 p-2" 
            value={expense.category} 
            onChange={handleChange}
            name = "category"
            id ="category">
                <option value={""}>Selecciona una categoria</option>
                {categories.map(category => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                ))}
            </select>   
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-xl">Fecha:</label>
            <DatePicker
                value={expense.date}
                onChange={handleChangeDate}
                name ="date"
                id = "date" />
        </div>
        <button className="w-full bg-blue-500 uppercase rounded-lg text-white font-bold hover:bg-blue-600 p-2">Registrar Gasto</button>
    </form>
  )
}
