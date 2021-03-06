import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";
import Header from './components/Header';

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
