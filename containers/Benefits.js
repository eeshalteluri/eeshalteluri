import benefitsData from "../constants/BenefitsData.js";
import BenefitCard from "../components/BenefitCard.js";

const Benefits = () => {

    const BenefitCards = benefitsData.map((benefit, index) => {
        return BenefitCard(benefit.title, benefit.description, benefit.icon, index);
    })

    return `
    <section id="benefits" class="w-full mx-auto my-24 flex gap-8">
        <div class="w-2/5 ml-[7.5%]">
            <h2>Why Inkwell?</h2>
            <p>Smarter Writing </br> Starts Here.</p>
            <p>Inkwell isn't just another AI tool, its your creative partner. From sparking freash ideas to polishing your final draft, Inkwell adapts to your tone, voice, and needs</p>
        </div>

        <div class="benefit-scroll w-3/5 flex-1 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
            ${BenefitCards}
        </div>
    </section>
    `;
}
export default Benefits