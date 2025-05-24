import FAQSData from "../constants/FAQsData.js";
import FAQCard from "../components/FAQCard.js";

const FAQs = () => {
    return `
    <section id="faqs" class="w-[85%] mx-auto my-20 gap-4">
        <div class="w-full flex flex-col justify-center items-start gap-6">
            <h2 class="text-sm font-bold">Frequently Asked Questions</h2>
            <p class="style-oneliner">Still Curious?</br>We Got Answers</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            ${FAQSData.map((faq) => FAQCard({ question: faq.question, answer: faq.answer })).join('')}
        </div>
    </section>
    `;
}
export default FAQs