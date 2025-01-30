import { BudgetContext } from "../context/BudgetContext"
import { useContext } from "react"

export const useBudget = () => {
    const context  = useContext(BudgetContext)
    console.log(context);
    
    if(!context){
        throw new Error ("usedBudget must be used within a BudgetProvider")
    }
    
    return context
}
