// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundery } from 'app/providers/ErrorBoundery';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundery>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundery>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
