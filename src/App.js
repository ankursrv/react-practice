import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ActiveNavLinkPage from './pages/ActiveNavLinkPage'  // Nav Link Active
import NavigateToPage from './pages/NavigateToPage'
import NotFoundPage from './pages/NotFoundPage'
import NestedRouting from './pages/NestedRouting'       //Nested Route Page
import CompanyPage from './pages/NestedRouting/CompanyPage'   //Neted Route Page inner Routing
import SocialPage from './pages/NestedRouting/SocialPage'   //Neted Route Page inner Routing
import BlogPage from './pages/NestedRouting/BlogPage'   //Neted Route Page inner Routing
import CustomerRating from './pages/CustomerRating'
import ComponentShowcase from './pages/ComponentShowcase' // ComponentShowcase
import Portfolio2 from './pages/Portfolio2'
const App = () => {
  return (
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
        <Route path='/NavigateToPage' element={<NavigateToPage />} />
        <Route path='/nestedrouting/' element={<NestedRouting />}>
          <Route path='companypage' element={<CompanyPage />} />
          <Route path='socialpage' element={<SocialPage />} />
          <Route path='BlogPage' element={<BlogPage />} />
        </Route>
        <Route path='/CustomerRating' element={<CustomerRating />} />
        <Route path='/ComponentShowcase' element={<ComponentShowcase />} />
        <Route path='/Portfolio2' element={<Portfolio2 />} />
        <Route path='*' element={<NotFoundPage />} />
        {/* <Route path='*' element={<Navigate to='/' />} />   */}
      </Routes>
      <ActiveNavLinkPage />
      <Footer />
    </BrowserRouter>
  )
}
export default App