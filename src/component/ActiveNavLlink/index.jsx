import { NavLink } from "react-router-dom"

const navLink = [
    {
        navName : 'Home',
        navPath :'/'
    },
    {
        navName : 'About',
        navPath :'/About'
    },
    {
        navName : 'Services',
        navPath :'/Services'
    },
    {
        navName : 'ContactUs',
        navPath :'/ContactUs'
    },
    {
        navName : 'Technologies',
        navPath :'/Technologies'
    },
    {
        navName : 'Portfolio',
        navPath :'/Portfolio'
    },
]
const ActiveNavLink =()=>{
    return (
        <section className="max-w-[1320px] mx-auto my-10">
            <h1 className="text-4xl font-bold text-center">Active nav link</h1>
            <nav className="md:flex justify-between items-center mt-10 hidden">
                <figure>
                    <img src="./images/logo.png" alt=" logo" />
                </figure>
                <div>
                    <ul className="flex space-x-8 activeNavLink">
                        {
                            navLink.map((navItem, index)=>(
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