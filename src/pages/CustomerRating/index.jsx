import CustomerStarRating from "../../component/CustomerStarRating";
import { SectionTtl } from "../../component/SectionTtl";

const CustomerRating = () => {
    return (
        <>
            <section className="max-w-[1320px] mx-auto">
                <SectionTtl sectionTtlText="Customer Star Rating" />
                <CustomerStarRating />
            </section>
        </>
    )
}
export default CustomerRating
