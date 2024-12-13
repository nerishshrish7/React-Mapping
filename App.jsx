import './App.css'
import { Navbar } from './components/NavData'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='h-[10vh] w-[100%] bg-[aqua] flex'>
        {Navbar.map((val,i)=>
        {
          <Link to={val.path} key={i}>
            <div className='flex'>
              {val.title}
            </div>
          </Link>
        })};
      </div>
    </>
  )
}

export default App
