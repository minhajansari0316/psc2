
import './App.css';

import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import Surrogate from './pages/Surrogate';
import Parent from './pages/Parent';
import About from './pages/About';
import Apply from './pages/Apply';
import Parentform from './pages/Parentform';
import Requirements from './pages/Requirements';
import Compensation from './pages/Compensation';
import Steptosurrogacy from './pages/Steptosurrogacy';
import Faq from './pages/Faq';
import Surrogacybystate from './pages/Surrogacybystate';
import Parenthood from './pages/Parenthood';
import Oursurrogates from './pages/Oursurrogates';
import Surrogatecost from './pages/Surrogatecost';
import Internationaparent from './pages/Internationaparent';
import Lgbtsurrogacy from './pages/Lgbtsurrogacy';
import Ipfaq from './pages/Ipfaq';
import Singleparents from './pages/Singleparents';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/become-a-surrogate" element={<Surrogate/>} />
      <Route path="/become-a-parent" element={<Parent/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/apply" element={<Apply/>} />
      <Route path="/become-parent-form" element={<Parentform/>} />
      <Route path="/requirements-to-become-a-surrogate" element={<Requirements/>} />
      <Route path="/compensation" element={<Compensation/>} />
      <Route path="/steps-to-being-a-surrogate" element={<Steptosurrogacy/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/surrogacy-by-state" element={<Surrogacybystate/>} />
      <Route path="/steps-to-parenthood" element={<Parenthood/>} />
      <Route path="/our-surrogates" element={<Oursurrogates/>} />
      <Route path="/agency-fees" element={<Surrogatecost/>} />
      <Route path="/become-parent-international-form" element={<Internationaparent/>} />
      <Route path="/lgbt-surrogac" element={<Lgbtsurrogacy/>} />
      <Route path="/ip-faq" element={<Ipfaq/>} />
      <Route path="/single-parents" element={<Singleparents/>} />
      {/* <Route path="/Headers" element={<Headers/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Dogbread" element={<Dogbread/>}/>
      <Route path="/bread" element={<Bread/>}/>
      <Route path="/identify-of-bread" element={<Identify/>}/>
      <Route path="/packages" element={<Pricing/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/" element={<Newhomes/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/learnhow" element={<Learn/>}/>
      
      <Route path="/partner" element={<Partner/>}/>
      <Route path="/Appointment" element={<Appointmentdoctors/>}/>
      <Route path="/Newsfeed" element={<Newsfeed/>}/>
      <Route path="/dog-bmi" element={<Bmidog/>}/>
      <Route path="/forgot" element={<Forgotpass/>}/>
      <Route path="/verifyotp" element={<Verifyotp/>}/>
      <Route path="/resetpass" element={<Resetpass/>}/> */}
      {/* <Route path="*" element={<Notfound/>} /> */}


      
      






      </Routes>
      </BrowserRouter>
  
    
    
    </>
  );
}

export default App;
