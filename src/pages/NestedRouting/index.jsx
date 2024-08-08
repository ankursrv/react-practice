import { Link, Outlet } from "react-router-dom"
import SectionTtl from "../../component/SectionTtl"
const NestedRouting = () => {
    return (
        <>
            <section className="max-w-[1320px] mx-auto my-10">
            <SectionTtl sectionTtlText='Nested Routing' />
            <ul className="space-y-4">
                <li className="text-rose-500 text-base font-semibold text-center"><Link to='CompanyPage'>Company Page</Link></li>
                <li className="text-rose-500 text-base font-semibold text-center"><Link to='socialPage'>Social Media Page</Link></li>
                <li className="text-rose-500 text-base font-semibold text-center"><Link to='BlogPage'>Blog Page</Link></li>
                <Outlet /> 
            </ul>
            </section>
        </>
    )
}
export default NestedRouting