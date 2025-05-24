const BenefitCard = (title, description, icon, index) => {
    const isEven = index % 2 === 0;

    return `
        <div class="min-w-[300px] md:w-[350px] sm:h-[350px] flex-shrink-0 border border-secondary rounded p-6 flex flex-col justify-between items-end gap-4 bg-white shadow-lg">
            ${
                isEven 
                ? 
                `
                    <div class="text-left flex flex-col justify-end gap-4">
                        <h3 class="text-5xl font-extrabold">${title}</h3>
                        <p class="w-[200px]">${description}</p>
                    </div>

                    <img src="${icon}" alt="${title} icon" class="w-28 h-28" />
                `
                :
                `
                    <img src="${icon}" alt="${title} icon" class="w-28 h-28" />

                    <div class="text-left flex flex-col justify-end gap-4">
                        <h3 class="text-5xl font-extrabold">${title}</h3>
                        <p class="w-[200px]">${description}</p>
                    </div>
                `
            }
        </div>
    `;
}

export default BenefitCard;