
const ReuseableButton = ({ children, type, primary, secondary, tertery, onClick }) => {

    return (

        <>
            <button type={type} onClick={onClick}
                className=
                {
                    `font-semibold py-5 px-10 rounded-md 
                    ${primary && ' bg-dodgerblue text-white  rounded-md border border-dodgerblue hover:bg-white hover:text-dodgerblue'}
                    ${secondary && 'bg-orange-500 text-black border border-orange-500 hover:bg-white hover:text-orange-600'}
                    ${tertery && 'bg-white border border-dodgerblue text-dodgerblue hover:bg-dodgerblue hover:text-white'}`

                }>
                {children}
            </button>
        </>

    )
}
export default ReuseableButton

// This Component is import to UseState 