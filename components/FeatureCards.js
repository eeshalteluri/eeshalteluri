export const FeatureLargeCard = ({title, description, index}) => {
    return `
    <div key=${index} id="feature-large-card" class="col-span-1 h-[250px] rounded p-6 bg-secondary text-primary shadow-lg">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>
    `;
}

export const FeatureSmallCard = ({title, description, icon, alt, index}) => {
    const isEven = index % 2 === 0;

    return `
        <div key=${index} id="feature-small-card" class="col-span-1 h-[150px] rounded p-6 bg-gray-200 shadow-lg">
            ${
                isEven 
                ? 
                `
                    <div>
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>

                    <img src="${icon}" alt="${alt} icon" class="w-16 h-16" />
                `
                :
                `
                    <img src="${icon}" alt="${alt} icon" class="w-16 h-16" />

                    <div>
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                `
            }
        </div>
    `;
}
