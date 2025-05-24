import HowItWorksData from "../constants/HowItWorksData.js";
import HowItWorksCard from "../components/HowItWorksCard.js";

const HowItWorks = () => {
    return `
    <section id="how-it-works" class="relative bg-secondary text-primary sm:h-[1500px]">
        <div class="w-[85%] h-full mx-auto py-6 sm:py-20 flex flex-col justify-between items-start gap-8">
            <div class="flex flex-col justify-center items-start gap-4">
                <h2 class="text-sm font-bold">How It Works</h2>
                <p class="text-4xl sm:text-6xl font-black">Write Smarter</br>in 3 Simple</br> Steps</p>
            </div>
            <div class="w-full h-full flex flex-col justify-center items-center gap-4">
                <div key="1" id="testimonial-card" class="-rotate-6 md:-rotate-12 md:absolute md:top-[15%] md:right-[10%] max-w-[350px] h-[350px] md:h-[350px] flex-shrink-0 border border-primary rounded p-3 md:p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
                    <p class="text-left text-6xl font-extrabold">01</p>

                    <div class="text-left flex flex-col justify-center items-left gap-6">
                        <h3 class="text-xl text-left font-bold">${HowItWorksData[0].title}</h3>
                        <p class=" line-clamp-4">${HowItWorksData[0].description}</p>
                    </div>
                </div>
                
                <div key="2" id="testimonial-card" class="rotate-6 md:rotate-12 md:absolute md:top-[42%] md:left-[10%] min-w-[150px] max-w-[350px] h-[350px] md:h-[350px] flex-shrink-0 border border-primary rounded p-3 md:p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
                    <p class="text-left text-6xl font-extrabold">02</p>

                    <div class="text-left flex flex-col justify-center items-left gap-6">
                        <h3 class="text-xl text-left font-bold">${HowItWorksData[1].title}</h3>
                        <p class=" line-clamp-4">${HowItWorksData[1].description}</p>
                    </div>
                </div>

                <div key="3" id="testimonial-card" class="-rotate-6 md:-rotate-12 md:absolute md:top-[70%] md:right-[10%] min-w-[150px] max-w-[350px] h-[350px] md:h-[350px] flex-shrink-0 border border-primary rounded p-3 md:p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
                    <p class="text-left text-6xl font-extrabold">03</p>

                    <div class="text-left flex flex-col justify-center items-left gap-6">
                        <h3 class="text-xl text-left font-bold">${HowItWorksData[2].title}</h3>
                        <p class=" line-clamp-4">${HowItWorksData[2].description}</p>
                    </div>
                </div>

                <img src="/images/arrow.png" alt="arrow" class="hidden md:block w-32 h-32 lg:w-36 lg:h-36 xl:h-40 xl:w-40 2xl:h-48 2xl:w-48 md:absolute md:top-[30%] md:left-[25%] lg:top-[30%] lg:left-[35%] xl:top-[25%] xl:left-[45%] 2xl:top-[25%] 2xl:left-[45%] 2xl:rotate-12"/>
                <img src="/images/arrow.png" alt="arrow" class="hidden md:block scale-x-[-1] w-32 h-32 lg:w-36 lg:h-36 xl:h-40 xl:w-40 2xl:h-48 2xl:w-48 md:absolute md:top-[55%] md:right-[25%] lg:top-[55%] lg:right-[35%] xl:top-[55%] xl:left-[45%] 2xl:-rotate-12"/>
                <img src="/images/arrow1.png" alt="arrow" class="hidden md:absolute md:top-[20%] md:left-[45%] md:rotate-45"/>
                <img src="/images/arrow2.png" alt="arrow" class="hidden md:absolute bottom-[300px] left-[700px] -rotate-90"/>
            </div>

            <button class="p-4 rounded-full bg-primary text-secondary shadow-[0_0_10px_white] hover:bg-primary hover:text-secondary">
                Start Writing
            </button>
        </div>
    </section>
    `;
}
export default HowItWorks