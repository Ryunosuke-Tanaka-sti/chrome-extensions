import './App.css';
import { InputForm } from './components/modules/InputForm';
import { ListColorPaletteList } from './components/modules/ListColorPaletteList';

function App() {
  return (
    <>
      <main className="flex flex-col items-start gap-16 font-kosugi">
        <InputForm />
        <ListColorPaletteList />
      </main>
    </>
  );
}

export default App;
