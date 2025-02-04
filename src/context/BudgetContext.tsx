import { useReducer , createContext, Dispatch, ReactNode, useMemo} from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state : BudgetState
    dispatch : Dispatch<BudgetActions>,
    totalExpenses : number,
    ramainingBudget : number
}
type BudgetProviderProps = {
    children : ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!)
//de donde vienen los datos
export const  BudgetProvider = ({children} : BudgetProviderProps) => {
    const [state,dispatch] = useReducer(budgetReducer,initialState)
    const totalExpenses = useMemo(()=> state.expenses.reduce((total,expenses) => expenses.amount + total, 0 ),[state.expenses])
    const ramainingBudget =  state.budget - totalExpenses
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                ramainingBudget
            }}        
        >
            {children}
        </BudgetContext.Provider>
    )
}