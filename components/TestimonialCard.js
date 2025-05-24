const TestimonialCard = ({name, designation, rating, testimonial, image, index}) => {
    const isEven = index % 2 === 0;
    return `

        <div key=${index} id="testimonial-card" class="w-[200px] md:w-[350px] h-[350px] sm:h-[450px] flex-shrink-0 border border-secondary rounded p-6 flex flex-col justify-between items-center gap-4 ${isEven ? 'bg-primary text-secondary' : 'bg-secondary text-primary'} shadow-lg">
            <div class="flex flex-col justify-center items-center gap-2 text-center">
                <img src="${image}" alt="${name} image" class="w-16 h-16 rounded-full" />
                <h3>${name}</h3>
                <p>${designation}</p>
            </div>

            <div class="flex gap-1">
            ${Array.from({ length: 5 }, (_, i) => 
                i < rating 
                ? '<span class="text-yellow-500">★</span>' 
                : '<span class="text-gray-300">★</span>'
            ).join('')}
            </div>
                 
            <p class="text-center line-clamp-4">${testimonial}</p>
        </div>
    `;
}

export default TestimonialCard;