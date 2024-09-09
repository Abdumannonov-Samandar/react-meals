
const CardContent = ({Image, title, desctription}: { Image: string, title: string, desctription?: string}) => {
  return (
    <li className="p-4 rounded-md shadow-md bg-gradient-to-b to-sky-500 from-sky-200 group hover:bg-gradient-to-t hover:from-red-400 hover:to-red-600">
        <img className="w-full h-[150px] mb-2" src={Image} alt={title}/>
        <h3 className="text-lg font-bold text-center mb-1 border-t text-white border-white/50 group-hover:text-orange-800">{title}</h3>
        <p className="text-sm font-normal text-white/60 group-hover:text-amber-800">{desctription}</p>
    </li>
  )
}

export default CardContent