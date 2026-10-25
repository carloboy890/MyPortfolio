import { lazy, Suspense } from "react";
import "./App.css";
const Home = lazy(() => import("./Routes/Home"));
const SimonGame = lazy(() => import("./GameProject/SimonGame"));
const QuizGame = lazy(() => import("./GameProject/QuizGame"));
const FreeCommentApp = lazy(
  () => import("./OtherProjects/FreeComment/FreeCommentApp"),
);
const WeatherApp = lazy(() => import("./OtherProjects/WeatherApps/WeatherApp"));
const MovieApp = lazy(() => import("./OtherProjects/MovieApps/MovieApp"));
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
      {/* <MusicPlayer /> */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freeCommentApp" element={<FreeCommentApp />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
          <Route path="/movieApp" element={<MovieApp />} />
          <Route path="/simon" element={<SimonGame />} />
          <Route path="/quiz" element={<QuizGame />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
