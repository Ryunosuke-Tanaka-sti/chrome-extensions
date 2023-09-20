import './App.css';
import { ButtonComponent } from './components/general/ButtonComponent';
import { InputForm } from './components/modules/InputForm';
import { ListColorPaletteList } from './components/modules/ListColorPaletteList';

function App() {
  const onClick = async () => {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    if (tab.id) {
      const response = await chrome.tabs.sendMessage(tab.id, { greeting: 'hello' });
    }
  };
  return (
    <>
      <main className="flex flex-col items-start gap-16 font-kosugi">
        <InputForm />
        <ListColorPaletteList />
        <ButtonComponent label="test" onClick={onClick} />
      </main>
    </>
  );
}

export default App;
