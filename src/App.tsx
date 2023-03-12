function App() {
  return (
    <div className="inline-flex min-h-[200px] min-w-[300px] flex-col items-center justify-center gap-5 ">
      <span className="inline-block w-full text-center text-lg font-thin">
        猫ってかわいいよね。犬派だけど...
      </span>
      <button
        className="h-12 w-1/2 rounded-lg border-2 border-blue-600 bg-blue-500 font-bold text-white hover:cursor-pointer"
        onClick={() => {
          window.open('https://tech-lab.sios.jp/');
        }}
      >
        ブログ（Tech）
      </button>
      <button
        className="h-12 w-1/2 rounded-lg border-2 border-blue-600 bg-blue-500 font-bold text-white hover:cursor-pointer"
        onClick={() => {
          window.open('https://tech-lab-engineer.sios.jp/log/');
        }}
      >
        ブログ（日記）
      </button>
    </div>
  );
}

export default App;
