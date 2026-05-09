

export default function QuantitySelec() {
  return (
    <div className="flex items-center gap-4">
        <select className="border rounded px-2 py-1 text-black bg-white"
        value={1}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
    </div>
  )
}
