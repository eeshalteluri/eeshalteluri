const BenefitCard = (title, description, icon, index) => {
    const isEven = index % 2 === 0;

    return `
        <div class="min-w-[250px] md:w-[350px] h-[350px] flex-shrink-0 border border-secondary rounded p-6 flex flex-col justify-center items-center gap-4 bg-white shadow-lg">
            ${
                isEven 
                ? 
                `
                    <div>
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>

                    <img src="${icon}" alt="${title} icon" class="w-16 h-16" />
                `
                :
                `
                    <img src="${icon}" alt="${title} icon" class="w-16 h-16" />

                    <div>
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                `
            }
        </div>
    `;
}

export default BenefitCard;