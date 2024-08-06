1. module.css Add more Class using Template Litrals 
Syntax = <button className={`${styles.hide} ${styles.show}`}>Show</button>
2. Material Ui package installation

3. Navigate Route -> agar koi page nhi create hua hai to 'Navigate' Route use home page pe redirect kr deta hai, 
syntax-> 

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
<Route path='*' element={<Navigate to='/' />} />