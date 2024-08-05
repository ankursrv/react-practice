import { useRef } from "react";

const SmoothScroll = () => {

    const pageOne = useRef(null);
    const pageTwo = useRef(null);
    const pageThree = useRef(null);
    const pageFour = useRef(null);

    const scrollToSection = (elementref) => {
        window.scrollTo({
            top: elementref.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <section className="max-w-[1320px] mx-auto">
            <ul className="flex items-center justify-center my-6 gap-4 font-bold text-2xl">
                <li onClick={() => scrollToSection(pageOne)}>Page 1</li>
                <li onClick={() => scrollToSection(pageTwo)}>Page 2</li>
                <li onClick={() => scrollToSection(pageThree)}>Page 3</li>
            </ul>
            <button onClick={()=>scrollToSection(pageFour)} className="p-4 bg-blueDark text-white">Go To Page 4</button>
            <div ref={pageOne} className="h-screen bg-red-500 mb-12">
                <h2 className="text-center pt-10 text-5xl text-white">Page 1</h2>
            </div>
            <div ref={pageTwo} className="h-screen bg-slate-800 mb-12">
                <h2 className="text-center pt-10 text-5xl text-white">Page 2</h2>
            </div>
            <div ref={pageThree} className="h-screen bg-orange-400 mb-12">
                <h2 className="text-center pt-10 text-5xl text-white">Page 3</h2>
            </div>
            <div ref={pageFour} className="h-screen bg-green-400 ">
                <h2 className="text-center pt-10 text-5xl text-white">Page 4</h2>
            </div>
        </section>
    )
}
export default SmoothScroll;