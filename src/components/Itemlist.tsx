import { Itemlists } from "../constants"


const Itemlist = () => {
  return (
    <section className="py-8 bg-[#eeeae0]">
            <div className="flex sm:flex-row flex-wrap gap-3 justify-around ">
            {Itemlists.map((items, index) => (
                <div
                key={index}
                className="rounded-md px-10 py-6 transition-all duration-700 ease-in-out flex flex-row items-center border-[#fff] z-[10] gap-4 hover:border-[#0068c8] hover:border bg-white cursor-pointer">
                    <img src={items.icon} className="w-[48px] h-[48px]" alt="" />
                    <h3 className="font-poppins font-semibold">{items.title}</h3>
                </div>
            ))}
            </div>
    </section>
  )
}

export default Itemlist;