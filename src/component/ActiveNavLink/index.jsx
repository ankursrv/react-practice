import { NavLink } from "react-router-dom"
import SectionTtl from "../SectionTtl" // component inner component call
import {navLinkActive} from '../Data'   // Import Data from export name

const ActiveNavLink =()=>{
    return (
        <section className="max-w-[1320px] mx-auto my-10">
            <SectionTtl sectionTtlText='Active nav link' />
            <nav className="md:flex justify-between items-center mt-10 hidden">
                <figure>
                    <img src="./images/logo.png" alt=" logo" />
                </figure>
                <div>
                    <ul className="flex space-x-8 activeNavLink">
                        {
                            navLinkActive.map((navItem, index)=>(
                                <li key={index} className="font-bold">
                                    <NavLink to={navItem.navPath}>{navItem.navName}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </section>
    )
}
export default ActiveNavLink