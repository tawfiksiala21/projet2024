import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListArticles from "./ListArticles";
import AddArticles from "./AddArticles";
import EditArticles from "./EditArticles";
import Menu from "./Menu";

function App() { 
  return ( 
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<ListArticles />} />
        <Route path="/liste" element={<ListArticles />} />
        <Route path="/add" element={<AddArticles />} />
        <Route path="/edit/:id" element={<EditArticles />} />
      </Routes>
    </Router>
  );
}

export default App;