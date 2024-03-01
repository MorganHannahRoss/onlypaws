/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import TestSite from './components/TestSite'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="test-site" element={<TestSite />} />
    </Route>
  )

)

export default router
