import Card from "../../component/Card"

import {cardItemsData} from "../../component/Data"    // Import Data from Data.jsx

const Home = () => {
    return (
        <section className="max-w-[1320px] mx-auto">
            <div className="grid md:grid-cols-4 my-9 gap-6">
                {
                    cardItemsData.map((cardItem, index) => (
                        <Card key={index}
                        title = { cardItem.title }
                        discription={cardItem.discription}
                        goToPageLink= {cardItem.goToPageLink}
                        goToPageText={cardItem.goToPageText}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Home
