import "./App.css";
import Home from "./Routes/Home";
import SimonGame from "./GameProject/SimonGame";
import QuizGame from "./GameProject/QuizGame";
import FreeCommentApp from "./OtherProjects/FreeComment/FreeCommentApp";
import WeatherApp from "./OtherProjects/WeatherApps/WeatherApp";
import MovieApp from "./OtherProjects/MovieApps/MovieApp";
import HomeContainer from "./Components/HomeContainer";
import LoginInfo from "./OtherProjects/FreeComment/Login/LoginInfo";
import AdminLoginInfo from "./OtherProjects/FreeComment/Login/adminLoginInfo";
import RegistrationField from "./OtherProjects/FreeComment/Registration/RegistrationField";
import ChatField from "./OtherProjects/FreeComment/ChatField";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MusicPlayer from "./Components/MusicPlayer";

function App() {
  return (
    <>
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freeCommentApp" element={<FreeCommentApp />} />
        <Route path="/weatherApp" element={<WeatherApp />} />
        <Route path="movieApp" element={<MovieApp />} />
        <Route path="/simon" element={<SimonGame />} />
        <Route path="/quiz" element={<QuizGame />} />
      </Routes>
    </>
  );
}

export default App;
