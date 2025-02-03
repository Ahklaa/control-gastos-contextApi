import { useMemo } from "react"
import { formatDate } from "../helpers"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/category"
import {
    SwipeableList,
    SwipeableListItem,
    TrailingActions,
    LeadingActions,
    SwipeAction
} from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from "../hooks/useBudget"
type ExpenseDetailProps = {
    expense : Expense
    
}
export default function ExpenseDetail({expense}: ExpenseDetailProps) {
    const categoryInfo = useMemo(()=> categories.filter(cat => cat.id === expense.category),[expense])[0]
    const {dispatch} = useBudget()

    const leadingActionExpense = () => (
        <LeadingActions>
            <SwipeAction onClick={()=> dispatch({type : "get-expense-by-id" , payload : {id : expense.id}})}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActionExpense = () => (
        <TrailingActions>
            <SwipeAction onClick={()=> dispatch({type : "remove-expense" , payload : {id : expense.id}})} destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
  return (
    <SwipeableList>
        <SwipeableListItem 
        maxSwipe={1}
        leadingActions={leadingActionExpense()}
        trailingActions={trailingActionExpense()}
        >
            <div className="bg-white shadow-lg border-b border-gray-200 p-10 w-full flex items-center gap-5">
                    <div>
                        <img src={`/icono_${categoryInfo.icon}.svg`} alt="icono gasto" className="w-20"/>
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-slate-500 uppercase font-bold">{categoryInfo.name}</p>
                        <p className="">{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                    </div>
                    <AmountDisplay amount={expense.amount}/>
            </div>
        </SwipeableListItem>
   </SwipeableList>
  )
}
