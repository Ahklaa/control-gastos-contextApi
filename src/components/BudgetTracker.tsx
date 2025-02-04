import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import 'react-circular-progressbar/dist/styles.css';
export default function BudgetTracker() {
    const {state,ramainingBudget,totalExpenses,dispatch} = useBudget()
    const porcentage = +((totalExpenses / state.budget) * 100).toFixed(2)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <CircularProgressbar
            value={porcentage}
            styles={buildStyles({
                pathColor: porcentage === 100 ? "#DC2626" : "#3b82f6",
                trailColor : "F5F5F5",
                textColor : porcentage === 100 ? "#DC2626" : "#3b82f6",
                textSize : 8
            })}
            text = {`${porcentage}% Gastado`}
            

            />
        </div>
        <div className="flex flex-col items-center gap-8">
            <button className="bg-pink-600 font-bold text-white p-2 w-full uppercase rounded-lg"
            onClick={()=> dispatch({type : "reset-budget"})}>
                Resetear App
            </button>
            <AmountDisplay 
                label = "Presupuesto"
                amount = {state.budget}
            />
            <AmountDisplay 
                label = "Disponible"
                amount = {ramainingBudget}
            />
            <AmountDisplay 
                label = "Gastado"
                amount = {totalExpenses}
            />
        </div>
    </div>
  )
}
