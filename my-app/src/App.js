import { Routes, Route } from "react-router-dom";
import Comment from "./Comment";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/comment" element={<Home />} /> */}
        <Route path="comment/:id" element={<Comment></Comment>} />
      </Routes>
    </>
  );
}

export default App;
