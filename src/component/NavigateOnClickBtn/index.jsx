
const NavigateOnClickBtn =({navigateBtnText, onClick})=>{   // This Component Call to useState page And Form Page
   
  
    return(
        <>
        <button onClick={onClick} className="bg-dodgerblue py-4 px-8 rounded-lg font-semibold text-white">{navigateBtnText}</button>
        </>
    )
}
export default NavigateOnClickBtn