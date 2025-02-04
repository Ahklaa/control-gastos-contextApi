import { ChangeEvent } from "react";
import { categories } from "../data/category";
import { useBudget } from "../hooks/useBudget"; 

export default function FilterCategory() {
    const {dispatch} = useBudget()
    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
        dispatch({type : "add-filter-category", payload:{id : e.target.value}})
    }
  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
        <form className="">
            <div className="flex flex-col md:flex-row md:items-center gap-5 ">
                <label htmlFor="categories">Filtrar por categoria</label>
                <select id="categories" className="bg-slate-200 flex-1 p-3 rounded" 
                onChange={handleChange}>
                    <option value="">Todas las categorias</option>
                    {categories.map(category => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            
        </form>
    </div>
  )
}
