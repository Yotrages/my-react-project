import { Minislider } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { FaHeart, FaChargingStation } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"


const Deals = () => {

    const [mouse, setMouse] = useState<number>(-1)

    const Mouseover = (index: number) => {
        setMouse(mouse === index ? -1 : index)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };  

    return (
        <section className="py-10">
            <div className="flex flex-row items-start justify-between px-5 gap-4 w-[95%] m-auto">
                <div className="py-4 px-4 text-center flex flex-col border-[#0068c8] gap-[20px] border-[5px] items-center rounded-md w-1/3 h-[354px]">
                    <p className="text-[#dd2831] text-[0.93rem]">ONLY FOR TODAY</p>
                    <h2 className="font-[800] text-[25px]">Deal Of The Day</h2>
                    <p>Deal of the Day for deals on consumer electronics. Watch for many other great daily offers.</p>
                    <div className="flex items-center m-auto gap-3 justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <button className="px-3 py-2 rounded-md bg-[#0068c8] text-[22px] font-[800] tracking-wider text-white text-center">00</button>
                            <p className="text-[12px] text-[#848484]">Hours</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <button className="px-3 py-2 rounded-md bg-[#0068c8] text-[22px] font-[800] tracking-wider text-white text-center">00</button>
                            <p className="text-[12px] text-[#848484]">Mins</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <button className="px-3 py-2 rounded-md bg-[#0068c8] text-[22px] font-[800] tracking-wider text-white text-center">00</button>
                            <p className="text-[12px] text-[#848484]">Secs</p>
                        </div>
                    </div>
                </div>

                <div className="w-2/3 items-end">
                    <Slider {...settings}>
                        {Minislider.map((slider, index) => (
                            <div key={index} className="slick-slide flex-row border-[2px] border-[#ebebeb] rounded-md w-full gap-6 px-4 py-4 !flex">
                                <bdo dir="rtl" className={`flex flex-row gap-10 relative`} onMouseOver={() => Mouseover(index)}>
                                    <img className="max-w-[300px]" src={slider.img} alt="" />
                                    <div className="flex flex-col items-center">
                                        {slider.littleImg.map((littles, index) => (
                                            <img key={index} className="max-w-[80px]" src={littles.img} alt="" />
                                        ))}
                                    </div>
                                    {mouse === index && (
                        <div className={`${mouse === index ? 'transition-all ease-in-out duration-[1.5s]' : 'transition-none'} absolute flex flex-col flex-wrap gap-2 items-center pt-4 right-3`}>
                                <button title="Wishlist" className="size-10 bg-[#fff] transition-all ease-in-out duration-[1.5s] cursor-default hover:bg-[#e8f3fe] border border-[#0000001a] flex p-0 items-center text-center rounded-full"> <FaHeart  className="text-center m-auto"/> </button>
                                <button title="Quick View" className="size-10 bg-[#fff] transition-all ease-in-out duration-[1.5s] cursor-default hover:bg-[#e8f3fe]  border border-[#0000001a] flex p-0 items-center text-center rounded-full"> <FaSearch  className="text-center m-auto"/> </button>
                                <button title="Compare" className="size-10 bg-[#fff] transition-all ease-in-out duration-[1.5s] cursor-default hover:bg-[#e8f3fe] border border-[#0000001a] flex p-0 items-center text-center rounded-full"> <FaChargingStation className="text-center m-auto"/> </button>
                            </div>
                            )}
                                </bdo>
                                <div className="flex flex-col items-start gap-4">
                                    <span className="flex flex-row items-center gap-2">
                                        <p className="text-white bg-[#0068c8] min-w-[36px] p-[4px] text-[11px] rounded-md text-center">{slider?.percentage}</p>
                                        <h3 className={`${index === 0 ? 'flex' : 'hidden'} text-white bg-[#dd2831] min-w-[36px] p-[4px] text-[11px] rounded-md text-center`}>{slider?.status}</h3>
                                    </span>
                                    <a href="#" className="text-[1.09rem] font-semibold">{slider.name}</a>
                                    <h3 className="text-[1.09rem]">{slider.title}</h3>
                                    <span>{slider.icon}</span>
                                    <div className="flex flex-row items-center gap-2">
                                        <p className="text-[#dd2831] text-[18px] font-bold">{slider.price}</p>
                                        <del className="text-[#848484] text-[18px] font-semibold">{slider.wronged}</del>
                                    </div>
                                    <p className="text-[#848484] text-[1rem]">{slider.description}</p>
                                    <button className="rounded-md text-center border border-[#0068c8] hover:bg-[#0068c8] hover:text-white font-semibold text-[18px] px-10 py-2">{slider.buttonText}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Deals;
