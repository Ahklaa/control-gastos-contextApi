import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"
import FilterCategory from "./FilterCategory"

export default function ExpenseList() {
    const {state} = useBudget()
    const filterExpenses = state.filterCategory ? state.expenses.filter(expense => expense.category === state.filterCategory) : state.expenses
    
    const isEmpty = useMemo(()=> filterExpenses.length === 0,[filterExpenses])

  return (
    <div className="mt-10 bg-white shadow-lg p-5 rounded-lg">
        {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No Tienes Gastos Registrados</p> : (
            <>
                <p className="text-gray-600 text-2xl font-bold my-5">Lista de gastos</p>
                {filterExpenses.map((expense)=>(
                    <ExpenseDetail 
                    key={expense.id}
                    expense = {expense}
                    />
                ))}
            </>
        )} 
    </div>
  )
}
