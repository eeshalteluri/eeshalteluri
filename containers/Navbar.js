import NavButton from "../components/NavButton.js"
import NavData from "../constants/NavData.js";

const Navbar = () => {
    return`
    <div class="mt-10 flex justify-center items-center">
        <nav class="w-fit pl-4 p-2 bg-secondary text-white rounded-full flex justify-center items-center gap-8">
            <a href="/" class="font-bold italic">Inkwell</a>
            ${
                NavData.map((item, index) => NavButton({title: item.title, link: item.link, index})).join('')
            }
        </nav>
    </div>
    `;
}

export default Navbar