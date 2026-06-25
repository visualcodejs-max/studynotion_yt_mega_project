import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#090c11] text-white w-screen overflow-hidden min-h-screen pb-10">
      
      
      
      
      {/* Routes */}
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
