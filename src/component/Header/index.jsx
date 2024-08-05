import { Link } from "react-router-dom"

const menus = [
    {
        label: "Home",
        link: '/'
    },
    {
        label: "Technology",
        link: '/technology'
    },
    {
        label: "UseState",
        link: '/usestate'
    }
]
const Header = () => {
    return (
        <header className="bg-whiteLigth">
            <nav className="flex max-w-[1320px] mx-auto items-center justify-between py-4">
                <figure>
                    <Link to="/"><img src="./images/logo.png" alt="" /></Link>
                </figure>
                <div className="flex gap-12 items-center">
                    <ul className="flex gap-12 items-center justify-between">
                        {
                            menus.map(function (menu, index) {
                                return (
                                    <li key={index} className="text-blueDark font-semibold text-lg hover:text-dodgerblue active:text-dodgerblue focus:text-dodgerblue transition-all"><Link to={menu.link}>{menu.label}</Link></li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <button className="text-[17px] font-bold bg-dodgerblue text-white px-8 py-[14px] rounded-lg">
                            <Link to="/form">Contact Us</Link>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header