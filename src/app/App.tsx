import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initLoginData());
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="page">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
