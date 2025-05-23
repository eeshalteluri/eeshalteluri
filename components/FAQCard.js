const FAQCard = ({ question, answer }) => {
    return `
        <div id="faq-card" class="col-span-1 bg-white border border-secondary shadow-md rounded-lg p-4 mb-4">
            <h3 class="text-lg font-semibold text-secondary">${question}</h3>
            <p class="text-gray-700 mt-2">${answer}</p>
        </div>
    `
}

export default FAQCard;