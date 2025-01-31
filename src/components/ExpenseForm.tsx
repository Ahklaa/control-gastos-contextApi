import { categories } from "../data/category";

export default function ExpenseForm() {
  return (
    <form className="space-y-5">
        <legend className="text-2xl font-black text-center border-b-4 border-blue-500 p-2 uppercase">Nuevo Gasto</legend>
        <div className="flex flex-col gap-2">
            <label htmlFor="spentName" className="text-xl">Nombre Gasto:</label>
            <input 
            className="bg-slate-100 p-2"
            type="text"
            name="spentName"
            id="spentName"
            placeholder="Añade el nombre del gasto"
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-xl">Cantidad:</label>
            <input 
            className="bg-slate-100 p-2"
            type="number"
            name="amount"
            id="amount"
            placeholder="Añade el valor del gasto. Ej. 200"
             />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-xl">Cantidad:</label>
            <select className="bg-slate-100 p-2">
                <option value={""}>Selecciona una categoria</option>
                {categories.map(category => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                ))}
            </select>   
        </div>
        <button className="w-full bg-blue-500 uppercase rounded-lg text-white font-bold hover:bg-blue-600 p-2">Registrar Gasto</button>
    </form>
  )
}
