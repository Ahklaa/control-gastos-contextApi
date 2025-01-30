import { useReducer , createContext, Dispatch, ReactNode} from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state : BudgetState
    dispatch : Dispatch<BudgetActions>
}
type BudgetProviderProps = {
    children : ReactNode
}
const BudgetContext = createContext<BudgetContextProps>(null!)

const BudgetProvider = ({children} : BudgetProviderProps) => {
    const [state,dispatch] = useReducer(budgetReducer,initialState)
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}        
        >
            {children}
        </BudgetContext.Provider>
    )
}