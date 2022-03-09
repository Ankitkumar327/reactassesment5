import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import { StudentProvider } from "./Component/Studentcontext";
import Home from "./Component/Home";
import Editstudent from "./Component/Editstudent";
import Addstudent from "./Component/Addstudent";

function App() {
  return (
    <StudentProvider>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/add/:id" element={<Addstudent />} />
            <Route path="/student/edit/:id" element={<Editstudent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </StudentProvider>
  );
}

export default App;
