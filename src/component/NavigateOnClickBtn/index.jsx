
const NavigateOnClickBtn =({navigateBtnText, onClick})=>{
   
  
    return(
        <>
        <button onClick={onClick} className="bg-dodgerblue py-4 px-8 rounded-lg font-semibold text-white">{navigateBtnText}</button>
        </>
    )
}
export default NavigateOnClickBtn