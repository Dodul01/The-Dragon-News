const Marquee = ({news}) => {
  return (
    <div className="flex items-center bg-slate-300 w-[90vw] rounded-lg mx-auto mt-3">
      <button className="btn bg-black text-white">Breaking News</button>      
      <marquee className="font-semibold">{news}</marquee>
    </div>
  )
}

export default Marquee
