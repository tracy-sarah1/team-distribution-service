import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>

        </Routes>
      
    </div>
  )
}

export default Router
