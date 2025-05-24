const HowItWorksCard = ({ title, description, index }) => {
    return `
        <div key="${index}" id="testimonial-card" class="-rotate-12 absolute top-20 right-5 max-w-[350px] h-[450px] flex-shrink-0 border border-primary rounded p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
            <p class="text-left text-6xl font-extrabold">0${index+1}</p>

            <div class="text-left flex flex-col justify-center items-left gap-6">
                <h3 class="text-xl text-left font-bold">${title}</h3>
                <p class=" line-clamp-4">${description}</p>
            </div>
        </div>
    `;
};

export default HowItWorksCard;
