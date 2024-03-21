import AppRoutes from './routes/index';
import { GlobalReset, GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
