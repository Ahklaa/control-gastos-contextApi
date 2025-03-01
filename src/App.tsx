import BudgetForm from "./components/BudgetForm"
import { useMemo, useEffect } from "react"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterCategory from "./components/FilterCategory"
function App() {
    const {state} = useBudget()

    useEffect(()=> {
        localStorage.setItem('budget', state.budget.toString() )
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
    },[state])

    const isValidBudget = useMemo(()=> state.budget > 0,[state.budget])
    return (
    <>
      <header className="bg-blue-950  py-8 max-h-72">
          <h1 className="font-black text-center text-white uppercase text-4xl" >Planificador de Gastos</h1>
      </header>
      <div className="max-w-3xl mx-auto rounder-lg bg-white shadow-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterCategory/>
          <ExpenseList />
          <ExpenseModal />
       </main>
      )}
      
    </>
  )
}

export default App
