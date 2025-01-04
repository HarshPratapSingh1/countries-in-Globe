import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './components/Home';
import Contact from './components/Contact';
import { Error } from './components/Error';
import CountryInfo from './components/CountryInfo';
const a=<BrowserRouter>
<Routes >
  <Route path="/" element={<App />}  >
      <Route path="/" element={<Home/>} />
      <Route path="/settings" element={<h1>hi</h1>}/> 
      <Route path="/contactUs" element={<Contact/>}/> 
      <Route path='/:country' element={<CountryInfo />}/>
      <Route path="*" element={<Error />} />
  </Route>
</Routes>
</BrowserRouter>
const root = createRoot(document.querySelector('#root'))

root.render(a)

