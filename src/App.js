import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './modules/Layout';
import ReferAndEarn from './modules/ReferAndEarn'
import EnrolledFriends from './modules/ReferAndEarn/EnrolledFriends'

const App = () => {
  return (  
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<ReferAndEarn />}/>
          <Route path='/enrolled-friends' element={<EnrolledFriends />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
