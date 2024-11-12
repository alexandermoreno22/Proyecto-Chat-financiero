import './App.css'
import Chat from './components/Chat'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header/>
      <div className="main-content">
        <Sidebar />
        <Chat />
      </div>

    </>
  )
}

export default App
