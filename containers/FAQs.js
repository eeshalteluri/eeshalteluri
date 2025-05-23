import FAQSData from "../constants/FAQsData.js";
import FAQCard from "../components/FAQCard.js";

const FAQs = () => {
    return `
    <section id="faqs" class="w-[85%] mx-auto my-20">
        <div>
            <h2>Frequently Asked Questions</h2>
            <p class="text-center">Still Curious? </br> We Got Answers</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
        ${FAQSData.map((faq, index) => FAQCard({
            question: faq.question,
            answer: faq.answer,
            index
        })).join('')}
        </div>
    </section>
    `;
}
export default FAQs