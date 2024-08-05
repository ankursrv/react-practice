import Card from "../../component/Card"

const cardItems = [
    {
        title: "Smooth Scroll",
        discription: "Smooth Scroll using useRef Hooks",
        goToPageText: "Go To Page",
        goToPageLink: "/smoothScroll",
    },
    {
        title: "Material UI",
        discription: "Material UI is an open-source React component library that implements Google's Material Design.",
        goToPageText: "Go To Page",
        goToPageLink: "/materialui",
    }
]

const Home = () => {
    return (
        <section className="max-w-[1320px] mx-auto">
            <div className="grid md:grid-cols-4 my-9 gap-6">
                {
                    cardItems.map((cardItem, index) => (
                        <Card key={index}
                        title = { cardItem.title }
                        discription = { cardItem.discription }
                        goToPageText = { cardItem.goToPageText }
                        goToPageLink = { cardItem.goToPageLink }
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Home
