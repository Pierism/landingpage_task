
import './App.css'
import Headercontent from './components/header/Headercontent'
import Bodycontent from './components/body/Bodycontent'
import Footercontent from './components/footer/Footercontent'

function App() {
  

  return (
    <>
      <div id='wrapper'>
        <Headercontent/>
        <br/><br />
        <Bodycontent/>
        <br /><br />
        <Footercontent/>
      </div>
    </>
  )
}

export default App
