import benefitsData from "../constants/BenefitsData.js";
import BenefitCard from "../components/BenefitCard.js";

const Benefits = () => {

    const BenefitCards = benefitsData.map((benefit, index) => {
        return BenefitCard(benefit.title, benefit.description, benefit.icon, index);
    })

    return `
    <section id="benefits" class="w-full mx-auto my-4 sm:my-24 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div class="w-[85%] mx-auto sm:w-2/5 sm:ml-[7.5%] flex flex-col justify-center items-start gap-6">
            <h2 class="font-bold">Why Penwise?</h2>
            <p class="style-oneliner">Smarter Writing<br /> <span class="pt-2 block">Starts Here.</span></p>
            <p class="max-w-md">Inkwell isn't just another AI tool, its your creative partner. From sparking freash ideas to polishing your final draft, Inkwell adapts to your tone, voice, and needs</p>
        </div>

        <div class="benefit-scroll mx-2 sm:w-3/5 sm:flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
            ${BenefitCards}
        </div>
    </section>
    `;
}
export default Benefits