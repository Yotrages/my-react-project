import { bgimage } from "../assets"
import { Terms } from "../constants"

const Newsletter = () => {
  return (
    <section className="py-8">
        <div className="">
            <span className="relative flex">
            <img src={bgimage} className="w-full bg-center bg-no-repeat bg-cover h-[300px]" alt="" />
            <div className="absolute top-1/4 flex flex-row items-center justify-between px-6 translate-x-[-50%] left-1/2 flex-wrap w-[93%] m-auto bg-white gap-28 rounded-md py-6">
              <div className="flex-wrap w-[39%] md:text-[40px] text-[30px] font-[700] break-words">
              Sign Up For Newsletter & Get 20% Off
              </div>
              <div className="w-auto flex-1 justify-between border border-[#000] flex flex-row pl-4 rounded-md">
                <input type="text" placeholder="Your e-mail address" className="py-3" />
                <button className="rounded-md py-2 bg-black hover:bg-[#0068c8] text-center font-bold text-[17px] text-white px-4">SUBSCRIBE</button>
              </div>
            </div>
            </span>
        </div>

        <div className="w-[90%] m-auto py-20 border-b border-b-[#e6e6e6]">
          <div className="flex flex-row items-center gap-16">
              {Terms.map((terms, index) => (
                <div
                key={index}
                className="flex flex-row  items-center gap-4">
                      <img className="size-20" src={terms.icon} alt="" />
                      <div className="flex flex-col gap-2 text-left">
                        <h3 className="font-[900] uppercase text-[0.95rem]">{terms.title}</h3>
                        <p className="font-medium">{terms.description}</p>
                      </div>
                </div>
              ))}
          </div>
        </div>
    </section>
  )
}

export default Newsletter