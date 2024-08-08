import { useState } from "react"

const CustomerStarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <>
            <div className="flex flex-col">
                <div className="">
                    {
                        [1, 2, 3, 4, 5].map((star, index) => (
                            <button key={index}
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
                    {/* Show hover number or rating */}
                    <div className="mt-4 text-lg font-semibold">
                        {hover > 0 ? `Selected Rating: ${hover} / 5` : `Selected Rating: ${rating} / 5`}
                    </div>
                </div>


            </div>
        </>
    )
}
export default CustomerStarRating