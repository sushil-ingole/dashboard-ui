import './App.scss';
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'

function App() {

  return (
    <div className='app-container'>
      <div className="app-sidebar-container">
        <Sidebar/>
      </div>
      <div className="app-topbar-container">
        <Topbar/>
      </div>
      <div className="app-dashboard-container">
        <Dashboard/>
      </div>
    </div>
  )
}

export default App
