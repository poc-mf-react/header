import { ThemeProvider } from '@creditas-ui/system';
import { standard } from '@creditas-ui/themes';
import { Header } from './components/Header';

export const App = () => {
  return (
    <ThemeProvider theme={standard}>
      <Header />
    </ThemeProvider>
  );
};
