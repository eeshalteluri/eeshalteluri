const TestimonialCard = ({name, designation, rating, testimonial, image, index}) => {
    return `
        <div key=${index} id="testimonial-card" class="min-w-[250px] md:w-[350px] h-[450px] flex-shrink-0 border border-secondary rounded p-6 flex flex-col justify-center items-center gap-4 bg-white shadow-lg">
            <img src="${image}" alt="${name} image" class="w-16 h-16 rounded-full" />
            <h3>${name}</h3>
            <p>${designation}</p>
            <p>${testimonial}</p>
            <p>Rating: ${rating}</p>
        </div>
    `;
}

export default TestimonialCard;