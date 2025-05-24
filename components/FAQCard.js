const FAQCard = ({ question, answer }) => {
    return `
        <div id="faq-card" class="col-span-1">
            <details class="border border-secondary rounded-lg group overflow-hidden">
                <summary class="p-8 rounded-lg group-open:rounded-t-lg group-open:rounded-b-none border border-secondary cursor-pointer font-semibold bg-gray-100 hover:bg-gray-200 select-none flex justify-between items-center group-open:bg-black group-open:text-white">
                    <p>${question}</p>
                    <p>+</p>
                </summary>
                <div class="rounded-b-lg px-4 py-2 text-primary bg-secondary">
                    ${answer}
                </div>
            </details>
        </div>
    `;
};
export default FAQCard;