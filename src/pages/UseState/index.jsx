import { useState } from 'react'

const UseState = () => {
  const [hide, setHide] = useState(true)
  const [toggle, setToggle] = useState(true)
  return (
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
  )
}

export default UseState