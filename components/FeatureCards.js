export const FeatureLargeCard = ({title, description, image, index}) => {
    return `
    <div key=${index} id="feature-large-card" class="col-span-1 h-[250px] rounded p-6 bg-secondary text-primary shadow-lg flex flex-col justify-start items-end gap-4">
        <div class="w-full text-left">
            <h3 class="text-xl font-bold">${title}</h3>
            <p class="text-sm">${description}</p>
        </div>
        <img src="${image}" alt="${title} image" class="min-w-20 min-h-20 sm:w-32 sm:h-32 object-cover rounded" />
    </div>
    `;
}

export const FeatureSmallCard = ({title, description, icon, alt, index}) => {
    const isEven = index % 2 === 0;

    return `
        <div key=${index} id="feature-small-card" class="col-span-1 rounded p-6 bg-gray-200 shadow-lg flex flex-col justify-between items-center gap-4">
            ${
                isEven 
                ? 
                `
                    <div class="flex flex-col justify-center items-center gap-2">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <p class="text-xs">${description}</p>
                    </div>

                    <img src="${icon}" alt="${alt} icon" class="w-8 h-8 sm:w-16 sm:h-16" />
                `
                :
                `
                    <img src="${icon}" alt="${alt} icon" class="w-16 h-16" />

                    <div class="flex flex-col justify-center items-center gap-2">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <p class="text-xs">${description}</p>
                    </div>
                `
            }
        </div>
    `;
}
