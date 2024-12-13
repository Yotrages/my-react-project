import { Testimonial } from "../constants"


const Testimonials = () => {
  return (
    <section className="py-4 w-[95%] m-auto">
        <div className="w-full py-5 px-10 items-center">
            <div className="flex flex-row items-center gap-20 flex-wrap">
                {Testimonial.map((testimonials, index) => (
                    <img
                    key={index} 
                    src={testimonials.img}
                    alt="Testimonials image" 
                    className="size-auto opacity hover:opacity"/>
                    
                ))}
            </div>
        </div>

    </section>
)
}

export default Testimonials