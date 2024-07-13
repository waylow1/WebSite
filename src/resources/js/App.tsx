import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import FrontLayout from "@layouts/FrontLayout";

export default function App() {
     return (
          <Router>
               <FrontLayout>
                    <Routes>
                         <Route path="/" element={<Home />} />
                         {/* <Route path="/about" element={<About />} />
                         <Route path="/contact" element={<Contact />} /> */}
                    </Routes>
               </FrontLayout>
          </Router>
     );
}
