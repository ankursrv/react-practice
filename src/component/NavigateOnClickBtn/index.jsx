
const NavigateOnClickBtn =({navigateBtnText, onClick})=>{
  
    return(
        <>
        <h1 className="text-center text-3xl font-semibold">Navigate Button On Click</h1>
        <button onClick={onClick} className="bg-dodgerblue py-4 px-8 rounded-lg font-semibold text-white">{navigateBtnText}</button>
        </>
    )
}
export default NavigateOnClickBtn