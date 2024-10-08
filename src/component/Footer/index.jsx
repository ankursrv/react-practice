import { useState } from 'react';
import { Link } from "react-router-dom"
import ToastMessage from "../../component/ToastMessage"

import { itemOne, itemTwo, itemThird } from '../Data';  // Import Data from export name
const Footer = () => {

    const [toasts, setToasts] = useState([]);
    console.log(toasts)

    const showToast = (message) => {
        const id = Date.now();
        setToasts([...toasts, { id, message }]);
        setTimeout(() => removeToast(id), 3000); // Auto-remove after 3 seconds
    };

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        showToast('Form submitted successfully!');
        // Here, you can add any other logic you need to handle form submission.
    };
    return (
        <footer className='py-20 bg-gray'>
            <div className="max-w-[1320px] mx-auto grid grid-cols-4">
                <div>
                    <h5 className='mb-9 text-lg font-semibold'>Items One</h5>
                    <ul className='flex flex-col gap-5'>
                        {
                            itemOne.map((itemFirst, index) => (
                                <li key={index}><Link to={itemFirst.href}>{itemFirst.label}</Link></li>
                            ))
                        }
                  </ul>
                </div>
                <div>
                    <h5 className='mb-9 text-lg font-semibold'>Items Two</h5>
                    <ul className='flex flex-col gap-5'>
                        {
                            itemTwo.map((itemSec, index) => (
                                <li key={index}><Link to={itemSec.href}>{itemSec.label}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h5 className='mb-9 text-lg font-semibold'>Items Three</h5>
                    <ul className='flex flex-col gap-5'>
                        {
                            itemThird.map((itemThree, index) => (
                                <li key={index}><Link to={itemThree.href}>{itemThree.label}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h5 className='mb-9 text-lg font-semibold'>Items Contact</h5>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <input type="text" placeholder='Email Id' className='p-3' />
                        <button type="submit" className="w-fit py-3 px-7 bg-black text-white font-semibold">Submit</button>
                    </form>
                </div>
            </div>
            <div className="toasContainer">
                {
                    toasts.map(toast => (
                        <ToastMessage
                            key={toast.id}
                            message={toast.message}
                            onClose={() => removeToast(toast.id)}
                        />
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer
