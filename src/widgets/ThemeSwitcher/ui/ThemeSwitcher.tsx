import Button from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={classNames(styles.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <DarkIcon height={32} width={32} /> : <LightIcon height={32} width={32} />}
    </Button>
  );
};

export default ThemeSwitcher;
