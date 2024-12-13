import { FaBoltLightning, FaChevronDown } from "react-icons/fa6"
import { Language, Money, topbar } from "../constants"
import { useState } from "react"

const Topbar = () => {

  const [mouse, setMouse] = useState(false)
  const [currency, setCurrency] = useState(false)

  return (
    <div className="w-full items-center flex flex-row justify-between bg-black text-white py-3">
        <div className="flex items-center px-10 gap-7">
            <p className="font-poppins cursor-pointer text-[0.9rem] flex items-center gap-1 relative" onClick={() => setMouse((prev) => (!prev))}>English <FaChevronDown /> 
              {mouse && (
                <div className="absolute top-[33.5px] -left-3 rounded-md px-3 py-2 bg-black flex-col flex-wrap items-center">
                  {Language.map((langs, index) => (
                    <p onMouseLeave={() => setMouse(false)} onClick={() => setMouse(true)} className="mb-2" key={index}>{langs.lang}</p>
                  ))}
                </div>
              )}
            </p>
            <p className="font-poppins cursor-pointer text-[0.9rem] flex items-center gap-1 relative" onClick={() => setCurrency((prev) => (!prev))}>USD <FaChevronDown />
              {currency && (
                <div className="absolute top-[33px] -left-3 bg-black rounded-md px-5 py-2 flex flex-col items-center flex-wrap">
                    {Money.map((money, index) => (
                      <div key={index}>
                          <p className="cursor-pointer mb-1" onMouseLeave={() => setCurrency(false)} onClick={() => setCurrency(true)}>{money.currency}</p>
                      </div>
                    ))}
                </div>
              )}
            </p>
            <p className="font-poppins text-[0.9rem]">Free Shipping On All Orders Over $100</p>
        </div>

        <div className="flex items-center px-10">
        <ul className="list-none flex gap-6">
          {topbar.map((toplinks, index) => (
            <li
            className={`${index == 0 ? 'text-[#fcc904]' : 'text-white'} text-[0.9rem]`}
            key={index}>
              {index == 0 ? (
                <li className="flex items-center gap-1">
                  <FaBoltLightning /> {toplinks.name}
                </li>
              ) :  (
                <li>{toplinks.name}</li>
              ) }
            </li>
          ))}
        </ul>
        </div>
    </div>

   
  )
}

export default Topbar;