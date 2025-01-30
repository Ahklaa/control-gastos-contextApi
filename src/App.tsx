import BudgetForm from "./components/BudgetForm"
import { useContext } from "react"
import { BudgetContext } from "./context/BudgetContext"
function App() {
    const context = useContext(BudgetContext)
    console.log(context);
    
    return (
    <>
      <header className="bg-blue-950  py-8 max-h-72">
          <h1 className="font-black text-center text-white uppercase text-4xl" >Planificador de Gastos</h1>
      </header>
      <div className="max-w-3xl mx-auto rounder-lg bg-white shadow-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
