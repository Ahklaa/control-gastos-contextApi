import { formatDate } from "../helpers"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
    expense : Expense
    
}
export default function ExpenseDetail({expense}: ExpenseDetailProps) {
  return (
   <div className="bg-white shadow-lg border-b border-gray-200 p-10 w-full flex items-center gap-5">
        <div>

        </div>
        <div>
            <p className="">{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
        </div>
        <AmountDisplay amount={expense.amount}/>
   </div>
  )
}
