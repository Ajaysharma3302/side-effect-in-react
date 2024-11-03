// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import FetchUsers from '../src/Component/Fetch.jsx'
import EventListenerComponent from './Component/MouseEvent.jsx'
import  TitleUpdaterComponent from './Component/UpdateTitle.jsx'
// import FetchPost from '../src/Component/Fetch.jsx'

createRoot(document.getElementById('root')).render(
<>
    <FetchUsers /> 
   <EventListenerComponent />
   <TitleUpdaterComponent />
 ,
 </>
)
