import { useState } from 'react'
import { useNavigate } from 'react-router-dom'  // Navigate button on Click
import {SectionTtl} from '../../component/SectionTtl'
import NavigateOnClickBtn from '../../component/NavigateOnClickBtn' //NavigateOnClickBtn Component



const UseState = () => {


  const [hide, setHide] = useState(true)
  const [toggle, setToggle] = useState(true)

  const navigate = useNavigate()  // Navigate button on Click
  const navToPage = (url) => {    // navToPage create function no required
    navigate(url)
  }

  return (
    <>
      <section className="max-w-[1320px] mx-auto bg-whiteLightSecondary py-20 px-4">
        <h1>This is UseState Page Show & Hide{hide && ("This Text to be Hide")}</h1>

        <h1>Toggle button Show / Hide , {toggle && ("Toggle Button 'Show' , 'hide' text change")}</h1>

        <button className="py-3 px-9 rounded text-lg font-semibold mt-3 bg-orange-500 text-white" onClick={() => (setHide(false))}>Hide</button>
        <button className="py-3 px-9 rounded text-lg font-semibold mt-3 bg-orange-500 ml-3 text-white" onClick={() => (setHide(true))}>Show</button>
        <button className="py-3 px-9 rounded text-lg font-semibold mt-3 bg-slate-600 ml-3 text-white" onClick={() => (setToggle(!toggle))}>
          Toggle / {
            toggle ? 'Hide' : 'Show'
          }
        </button>
      </section>

      {/* Navigate Button Start  */}
      <section className="max-w-[1320px] mx-auto my-14">
        <SectionTtl sectionTtlText="Navigate Button On Click" />
        <div className='flex gap-4'>
          <NavigateOnClickBtn
            navigateBtnText='Navigate Home Page'
            onClick={() => navToPage('/')}
          />
          <NavigateOnClickBtn
            navigateBtnText='Navigate Technology Page'
            onClick={() => navToPage('/technology')}
          />
          <NavigateOnClickBtn
            navigateBtnText='Navigate Form'
            onClick={() => navToPage('/form')}
          />
        </div>
      </section>
      {/* Navigate Button END   */}
    </>
  )
}

export default UseState