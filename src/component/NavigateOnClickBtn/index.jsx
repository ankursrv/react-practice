
const NavigateOnClickBtn =({navigateBtnText, onClick})=>{
  
    return(
        <>
        <h1 className="text-center text-3xl font-semibold">Navigate Button On Click</h1>
        <button onClick={onClick} className="bg-dodgerblue p-4">{navigateBtnText}</button>
        </>
    )
}
export default NavigateOnClickBtn