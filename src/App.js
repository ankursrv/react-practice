import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import UseState from './pages/UseState'
import Technology from './pages/Technology'
import Header from './component/Header'
import Footer from './component/Footer'
import ContactForm from './pages/Form'
import SmoothScroll from './pages/SmoothScroll' // Smooth Scroll
import MaterialUi from './pages/MaterialUi'     // MaterialUi
import ExportDefaultAndExportName from './pages/ExportDefaultAndExportName'
import ModalPage from './pages/ModalPage'
import NotFoundPage from './pages/NotFoundPage'
const App =() =>{
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/smoothscroll" element={<SmoothScroll />} />
        <Route path="/materialui" element={<MaterialUi />} />
        <Route path='/exportdefaultandexportname' element={<ExportDefaultAndExportName />} />
        <Route path='/modal' element={<ModalPage />} />
        <Route path='*' element={<NotFoundPage />} />
        {/* <Route path='*' element={<Navigate to='/' />} />   */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App