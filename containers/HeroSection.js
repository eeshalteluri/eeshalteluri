const HeroSection = () => {
    return `
    <section class="flex-1 text-center flex flex-col justify-center items-center gap-6 mb-4">
        <h1 class="m-2 text-6xl font-extrabold">Catch the Flow. </br> Create Without Limits.</h1>
        <p class="m-2">Fuel your creativity with an AI writing assistant that helps you </br> branstorm, draft, and refine content -- all in one intelligent workspace.</p>

        <div class="flex flex-col md:flex-row gap-4">
            <button class="p-4 rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary shadow-md shadow-black">Start Writing</button>
            <button class="p-4 rounded-full border border-secondary bg-primary text-secondary hover:bg-secondary hover:text-primary">View Templates</button>
        </div>

    </section>
    `
}

export default HeroSection