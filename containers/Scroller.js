const Scroller = () => {
    return `
        <section id="scroller" class="h-20 bg-secondary flex justify-center items-center gap-6 overflow-x-auto">
            <div class="w-[85%] mx-auto flex justify-between items-center gap-10">
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