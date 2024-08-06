import { useState } from "react"


const Modal = ({ onClose }) => {
    const [closeModal, setCloseModal] = useState(true)
    const handleCloseModal = () => {
        setCloseModal(false)
        onClose();
    }

    return (
        <>
            {

                closeModal && (

                    <section>
                        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/4 p-6 rounded-xl shadow-2xl z-20">
                            <button className="absolute top-0 right-0 text-2xl p-2" onClick={handleCloseModal}>&#10006;</button>
                            <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint temporibus tempore ex!</p>
                        </div>
                    </section>
                )
            }
        </>
    )
}
export default Modal