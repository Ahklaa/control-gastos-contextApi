import { Category, DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'
export type BudgetActions = 
{type : "add-budget", payload : {budget : number}} |
{type : "show-modal"} | 
{type : "close-modal"} |
{type : "add-expense", payload : {expense : DraftExpense}} |
{type : "remove-expense", payload : {id : Expense['id']}} |
{type : "get-expense-by-id", payload : {id : Expense['id']}} |
{type : "update-expense" , payload : {expense : Expense}} | 
{type : "reset-budget"} |
{type : "add-filter-category", payload : {id : Category['id']}}

export type BudgetState = {
    budget : number
    modal: boolean
    expenses : Expense[]
    editingId : Expense['id']
    filterCategory : Category['id']
}


const createExpense = (draftExpense : DraftExpense) : Expense => {
    return {
        ...draftExpense,
        id : uuidv4()
    }
}

const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0
}
const initialExpenses = () : Expense[] => {
    let localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const initialState : BudgetState = {
    budget : initialBudget(),
    modal : false,
    expenses: initialExpenses(),
    editingId : "",
    filterCategory : ""
}

export const budgetReducer = (
    state : BudgetState = initialState,
    action: BudgetActions
) => {
        if(action.type === "add-budget"){
            return{
                ...state,
                budget : action.payload.budget
            }
        }
        if(action.type === "show-modal"){
            return {
                ...state,
                modal: true
            }
        }
        if(action.type === "close-modal"){
            return {
                ...state,
                modal: false,
                editingId : ""
            }
        }
        if(action.type == "add-expense"){
            return {
                ...state,
                expenses : [...state.expenses, createExpense(action.payload.expense)],
                modal : false
            }
        }
        if(action.type === "remove-expense"){
            return {
                ...state,
                expenses : state.expenses.filter(expense => expense.id !== action.payload.id)
            }
        }
        if(action.type === "get-expense-by-id"){
            return {
                ...state,
                editingId : action.payload.id,
                modal : true
            }
        }

        //edit
        if(action.type === "update-expense"){
            return{
                ...state,
            expenses : state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
            modal : false,
            editingId : ""
            }
        }
        if(action.type === "reset-budget"){
            return {
                ...state,
                expenses : [],
                budget : 0,
            }
        }
        if(action.type === "add-filter-category"){
            return{
                ...state,
                filterCategory : action.payload.id
            }
        }
        return state
}