import { useState } from "react"

const CustomerStarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <>
            <div className="flex gap-4">
                {
                    [1, 2, 3, 4, 5].map((star, index) => (
                        <button
                            className='text-5xl text-gray'
                            onClick={() => setRating(star)}
                            onMouseOver={() => setHover(star)}
                            onMouseLeave={() => setHover(rating)}

                        >
                            <span className={`text-5xl  ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'}`}>
                                &#9733;
                            </span>
                        </button>
                    ))
                }
            </div>
        </>
    )
}
export default CustomerStarRating