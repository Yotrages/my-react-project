import { FaChevronDown } from "react-icons/fa6"
import { logo } from "../assets"
import { Navright } from "../constants"
import { Link } from "react-router-dom"

const Topnav = () => {
  return (
    <section className="py-10 border-b border-[#e6e6e6] w-full">
        <div className="w-full">
        <div className="flex items-center justify-around">
            <img className="max-w-[170px]" src={logo} alt="logo" />
            <div className="flex items-center border-[3px] rounded-md pl-3 border-[#0068c8]">
            <p className="flex items-center gap-12 text-[#222] border-r border-[#ebebeb] mr-2">All categories <FaChevronDown className="mr-10"/> </p>
            <input className="py-3 w-[300px] text-black inset-0" type="text" placeholder="Search for products"/>
            <button className="font-poppins rounded-sm btn-primary text-[17px] text-white font-[800] px-4 py-[0.75rem]" title="search">Search</button>
            </div>
            <div className="flex items-center gap-5">
                {Navright.map((navItem, index) => (
                    <div
                    key={index}
                    className={`${index == 0 ? 'gap-2' : 'gap-0 w-[120px]'} flex flex-row items-center`}>
                         <img className="max-w-[35px]" src={navItem.icon} alt="" /> 
                         <span className={`flex flex-col items-center w-[160px] gap-0`}>
                          <span className="text-[0.8rem] font-[600] text-[#848484]">
                            <Link to={navItem.path}>{navItem.title}</Link>
                          </span>
                          <span className={`${index == 0 ? 'text-[#0068c8] font-[800] text-center' : 'text-black'} font-[800] text-[15px]`}>{navItem.description}</span>
                          </span>  
                    </div>
                ))}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Topnav