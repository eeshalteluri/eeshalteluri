import { FeatureLargeCard, FeatureSmallCard } from "../components/FeatureCards.js";
import { LargeCardsData, SmallCardsData } from "../constants/FeatureCardsData.js";

const Features = () => {
    return `
    <section id="features" class="w-[85%] mx-auto my-20">
        <div>
            <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="sm:w-1/2 flex flex-col justify-start sm:justify-center items-start gap-6">
                    <h2 class="font-bold">What You Can Create</h2>
                    <p class="style-oneliner">InkWell Can Write</br>Just About Anything.</p>
                </div>
                <p class="max-w-[450px]">Inkwell isn't just another AI tool, its your creative partner. From sparking freash ideas to polishing your final draft, Inkwell adapts to your tone, voice, and needs</p> 
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                ${LargeCardsData.map((card, index) => FeatureLargeCard({title: card.title, description: card.description, image: card.image, index})).join('')}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                ${SmallCardsData.map((card, index) => FeatureSmallCard({title: card.title, description: card.description, icon: card.icon, alt: card.alt, index})).join('')}
            </div>


            <div>
            </div>
        </div>
    </section>
    `;
}
export default Features