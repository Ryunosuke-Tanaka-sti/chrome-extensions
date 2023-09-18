import './App.css';
import { InputForm } from './components/InputForm';
import { ListColorPaletteList } from './components/ListColorPaletteList';

function App() {
  return (
    <main className="flex flex-col">
      <InputForm />
      <ListColorPaletteList />
    </main>
  );
}

export default App;
