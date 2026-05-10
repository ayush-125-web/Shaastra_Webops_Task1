

export default function QuantitySelec({onQuantityChange}:{onQuantityChange:(qty:number)=>void}) {
  return (
    <div className="flex items-center gap-4">
        <select className="border rounded px-2 py-1 text-black bg-white"
        onChange={(e)=>{onQuantityChange(Number(e.target.value))}}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
    </div>
  )
}
