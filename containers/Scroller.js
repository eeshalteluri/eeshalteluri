const Scroller = () => {
    return `
        <section id="scroller" class="sm:h-20 py-4 bg-secondary flex flex-col sm:flex-row justify-center items-center overflow-x-auto">
            <div class="w-full sm:w-[85%] sm:mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-10">
                <img src="/public/images/scroller/Notion.png" alt="Notion" class="w-auto h-10 object-cover" />
                <img src="/public/images/scroller/Medium.png" alt="Medium" class="w-auto h-10 object-cover" />
                <img src="/public/images/scroller/Trello.png" alt="Trello" class="w-auto h-10 object-cover" />
                <img src="/public/images/scroller/Slack.png" alt="Slack" class="w-auto h-10 object-cover" />
                <img src="/public/images/scroller/Mailchimp.png" alt="Mailchimp" class="w-auto h-10 object-cover" />
            </div>
        </section>
    `
}

export default Scroller