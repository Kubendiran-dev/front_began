import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./Banner";
import Cast from "./cast";
import Navbar from "./components/Navbar";
import Movie from "./optional";

const moviename = "Love Today";
const yearoflaunch = `2022 Romance/Comedy ‧ 2h 34m`;

const App = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="title">
          <div className="titlename">
            <h1>
              {moviename} <br /> {yearoflaunch}
            </h1>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/crew" element={<Cast />} />
        <Route path="/trailer" element={<Movie />} />
      </Routes>
    </>
  );
};

export default App;
