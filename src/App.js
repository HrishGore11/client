// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Login from "./Components/login/login";
import Signup from "./Components/signup/Signup";
// import Orders from "./Components/Orders/Orders";

import Dashboard from "./Components/dashboard/dashboard";
// import Customers from "./Components/Customers/Customers";
import Home from "./Components/Homepage/home";
// import Products from "./Components/Products/Products";
import Screenshot from "./Components/screenshots/screenshot";
import Filters from "./Components/3rdPage/filters";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="Home" element={<Home />} />
            <Route path="ScreenShot" element={<Screenshot />} />
            <Route path="Filters" element={<Filters />} />

            {/* <Route path="Customers" element={<Customers />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="Products" element={<Products />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
