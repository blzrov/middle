import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to="/">Main</Link>
      <Link to="/about">AboutPage</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
