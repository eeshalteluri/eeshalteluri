import NavButton from "../components/NavButton.js"
import NavData from "../constants/NavData.js";

const Navbar = () => {
    return `
    <!-- Mobile Toggle -->
    <div class="sm:hidden flex justify-end px-4 mt-4 items-center gap-2 relative z-50">
        <img id="menu-toggle" src="public/images/menu.png" alt="menu" class="w-[30px] h-[30px] cursor-pointer"/>
        <img id="menu-close" src="public/images/cancel.png" alt="menu" class="hidden w-[30px] h-[30px] cursor-pointer"/>    </div>

    <!-- Absolute Mobile Menu -->
    <div id="mobile-menu" class="hidden sm:hidden absolute top-10 right-10 left-10 flex flex-col items-center gap-2 bg-secondary text-white p-4 rounded-lg shadow-lg z-40">
        <a href="/" class="font-bold italic"><img src="/images/logo.svg" alt="Penwise" class="w-fll h-full"/></a>
        ${NavData.map((item, index) => NavButton({ title: item.title, link: item.link, index })).join('')}
    </div>

    <div class="mt-10 hidden sm:flex justify-center items-center">
        <nav class="w-fit pl-4 p-2 bg-secondary text-white rounded-full flex justify-center items-center gap-8">
            <a href="/" class="font-bold italic"><img src="/images/logo.svg" alt="Penwise" class="w-8 h-8"/></a>
            ${NavData.map((item, index) => NavButton({ title: item.title, link: item.link, index })).join('')}
        </nav>
    </div>
    `;
}


export default Navbar