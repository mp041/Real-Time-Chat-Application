
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import  Join  from './Components/Join';
import Chat from './Components/Chat';

function App() {

  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" exact element={<Join />} />
    <Route path="/chat" element={<Chat />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
