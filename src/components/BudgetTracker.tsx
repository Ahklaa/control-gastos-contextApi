import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
         <img alt ="Gráfico presupuesto" src="/grafico.jpg"/>
        </div>
        <div className="flex flex-col items-center gap-8">
            <button className="bg-pink-600 font-bold text-white p-2 w-full uppercase rounded-lg">
                Resetear App
            </button>
            <AmountDisplay 
                label = "Presupuesto"
                amount = {300}
            />
            <AmountDisplay 
                label = "Disponible"
                amount = {200}
            />
            <AmountDisplay 
                label = "Gastado"
                amount = {100}
            />
        </div>
    </div>
  )
}
