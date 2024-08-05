import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 300) {
                setShowScrollTopButton(true);
            }
            else {
                setShowScrollTopButton(false);
            }
        });
       
    }, []);
   

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div onClick={scrollTop} className="fixed bottom-0 z-50">
            {
                showScrollTopButton && (
                    <p className="bg-red-800 p-12">hello</p>
                )
            }
        </div>
    )
}
export default ScrollToTop;