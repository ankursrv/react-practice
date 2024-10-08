import { useNavigate } from 'react-router-dom'  // Navigate button on Click
import { inputBox } from '../../component/Data'   // Import Data from export name
import NavigateOnClickBtn from '../../component/NavigateOnClickBtn'


// Array destructruing Start 
const [fullName, marks, percentage] = ["Ashok kumar", "299", "80%"]
console.log(fullName, marks, percentage)
// Array destructruing END 

// Object destructruing Start 
const { fullName: fName, lName, roll } = { fullName: "Sonu", lName: "singh", roll: "15" }
console.log(fName)
console.log(lName)
console.log(roll)
// NOte: Object-> constant name and Property Name should be Sames
// Object destructruing END 

const ContactForm = () => {

  const navigate = useNavigate()  // Navigate button on Click
  const navToPage = (url) => {    // navToPage create function no required
    navigate(url)
  }
  return (
    <>
      <form>
        <div>
          {
            inputBox.map(function (inputItem, index) {
              return (
                <div className={inputItem.className} key={index}>
                  <label>{inputItem.labelName}</label>
                  <input type={inputItem.inputType} placeholder={inputItem.placeholder} />
                </div>
              )
            })
          }
        </div>
      </form>
      <div>
        <NavigateOnClickBtn navigateBtnText="Navigate UseState Page" onClick={() => navToPage('/usestate')} />
      </div>
    </>
  )
}

export default ContactForm
