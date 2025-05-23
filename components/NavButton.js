const NavButton = ({title, link}) => {
    return`
        <div>
            <button 
                class="nav-button px-4 py-2 rounded-full hover:bg-primary hover:text-secondary">
                    ${title}
            </button>
        </div>
    `;
}

export default NavButton