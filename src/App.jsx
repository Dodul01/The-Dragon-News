import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='max-w-[1550px] mx-auto'>
      <Outlet></Outlet>
    </div>
  )
}

export default App
