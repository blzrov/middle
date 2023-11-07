// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundery } from 'app/providers/ErrorBoundery';

render(
  <BrowserRouter>
    <ErrorBoundery>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundery>
  </BrowserRouter>,
  document.getElementById('root')
);
