import { FeatureLargeCard, FeatureSmallCard } from "../components/FeatureCards.js";
import { LargeCardsData, SmallCardsData } from "../constants/FeatureCardsData.js";

const Features = () => {
    return `
    <section id="features" class="w-[85%] mx-auto my-20">
        <div>
            <div class="w-full flex justify-between items-center gap-4">
                <div class="w-1/2">
                    <h2>What You Can Create</h2>
                    <p>InkWell Can Write</br>Just About Anything.</p>
                </div>
                <p class="max-w-[400px]">Inkwell isn't just another AI tool, its your creative partner. From sparking freash ideas to polishing your final draft, Inkwell adapts to your tone, voice, and needs</p> 
            </div>

            <div class="grid grid-cols-2 gap-4 mt-8">
                ${LargeCardsData.map((card, index) => FeatureLargeCard({title: card.title, description: card.description, index})).join('')}
            </div>

            <div class="grid grid-cols-3 gap-4 mt-8">
                ${SmallCardsData.map((card, index) => FeatureSmallCard({title: card.title, description: card.description, icon: card.icon, alt: card.alt, index})).join('')}
            </div>


            <div>
            </div>
        </div>
    </section>
    `;
}
export default Features