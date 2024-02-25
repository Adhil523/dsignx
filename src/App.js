
import Admin from './pages/Admin';
import SignApproval from './pages/SignApproval';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Listitem from './components/Listitem';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:id" element={<Admin/>}/>
      <Route path="customer/:id" element={<SignApproval />} />
      <Route path="user/:id" element={<Profile />} />
      <Route path="image" element={<Listitem/>}/>

    </Routes>
    
  </Router>
  );
}

export default App;
