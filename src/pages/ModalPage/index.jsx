
import { useState } from "react"
import Modal from "../../component/Modal"

const ModalPage =()=>{

    const [open, setOpen] = useState(false)
    const handleCloseModal =()=>{
        setOpen(false)
    }
    

    return (
        <section className="max-w-[1320px] mx-auto my-10">
           
                {
                    open && (
                        <Modal onClose={handleCloseModal} />
                    )
                }
            <button className="bg-dodgerblue p-4 text-white font-semibold text-lg rounded-md" onClick={()=>setOpen(true)}>Show Modal</button>
        </section>
    )
}
export default ModalPage