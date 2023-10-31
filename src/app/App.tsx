import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to="/">Main</Link>
      <Link to="/about">AboutPage</Link>
      <AppRouter />
    </div>
  );
};

export default App;
