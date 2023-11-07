import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
};

export default App;
