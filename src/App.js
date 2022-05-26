
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Protfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myprofile from './Pages/Dashboard/Myprofile';
import Myorder from './Pages/Dashboard/Myorder';
import Myreview from './Pages/Dashboard/Myreview';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="protfolio" element={<Protfolio/>} />

        <Route path="purchase" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path="myorder" element={<Myorder></Myorder>}></Route>
          <Route path="myreview" element={<Myreview></Myreview>}></Route>
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
