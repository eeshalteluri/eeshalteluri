import TestimonialsData from "../constants/TestimonialsData.js";
import TestimonialCard from "../components/TestimonialCard.js";

const Testimonials = () => {
    return `
    <section id="testimonials" class="my-20">
        <div class="w-[85%] mx-auto flex flex-col justify-center items-center gap-4 mb-8">
            <h2>Testimonials</h2>
            <p class="text-center style-oneliner">What Writers Like </br> You Are Saying</p>
        </div>
        <div class="ml-[7.5%] benefit-scroll flex-1 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
        ${
            TestimonialsData.map((testimonial, index) => 
                TestimonialCard({
                    name: testimonial.name,
                    designation: testimonial.designation,
                    rating: testimonial.rating,
                    testimonial: testimonial.testimonial,
                    image: testimonial.image,
                    index
                })
            )
        }
        </div>
    </section>
    `;
}
export default Testimonials