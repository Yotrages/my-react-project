import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa6"
import { cards, logo } from "../assets"
import { footer, Tags } from "../constants"

const Footer = () => {
  return (
    <section className="py-4">
        <div className="flex sm:flex-row flex-col gap-14 w-full m-auto flex-wrap justify-around items-center self-auto">
            <div className="flex flex-col gap-5 text-[1rem]">
                <img className="w-[150px]" src={logo} alt="" />
                <p className="font-poppins">Find a location nearest you. <br /> see <u className="text-[#dd2831] hover:text-[#0068c8]">Our Stores</u>
                </p> 
                <p className="font-poppins text-[1rem]">Support1234@Ecomall.com</p>
                <p className="font-[900] font-poppins text-[18px] hover:text-[#0068c8]">+08 9229 8228</p>
                <div className="flex flex-row gap-5 text-[26px]">
                    <FaFacebook className="hover:text-[#0068c8]"/>
                    <FaTwitter className="hover:text-[#0068c8]"/>
                    <FaInstagram className="hover:text-[#0068c8]"/>
                    <FaPinterest className="hover:text-[#0068c8]"/>
                </div>
            </div>

                    {footer.map((footerlinks, index) => (
                        <div
                        key={index}
                        className=" flex flex-col gap-4 flex-wrap">
                          <h2 className="font-poppins text-2xl font-bold">{footerlinks.title}</h2>
                          <ul className="flex-wrap">
                            {footerlinks.links.map((links, index) => (
                                <li
                                key={index}
                                className="list-none mb-2 font-poppins ">
                                    {links.name}
                                </li>
                            ))}
                          </ul>
                        </div>
                    ))}        
        </div>
                        <div className="px-10 py-20">
                            <h3 className="font-poppins text-[18px] mb-5 font-[800]">Trending Tags:</h3>
                                    <div className="flex gap-[10px] flex-wrap">
                            {Tags.map((tag, index) => (
                                <div
                                key={index}
                                className="border border-[#ebebeb] bg-[#fff0] text-[#848484] rounded-[5px] leading-4 px-3 py-2 hover:border-[#0068c8] hover:bg-[#00000000] cursor-pointer hover:text-[#0068c8]"
                                >
                                <p className="text-center text-[14px]">{tag.tags}</p>
                                </div>
                            ))}
                             </div>
                        </div>

                        <div className="border border-t-[#e6e6e6] w-[90%] m-auto mb-6" />

                        <div className="w-[90%] m-auto sm:flex-row justify-between flex flex-col sm:gap-10 gap-5">
                            <p className="text-[#848484]">&copy; Ecomall. All Rights Reserved.</p>
                            <img src={cards} alt="" />
                        </div>
    </section>
  )
}

export default Footer