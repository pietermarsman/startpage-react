import './App.css';
import Bookmarks from "./Bookmarks";
import bookmark_list from "./bookmark_list";

function App() {
  return (
    <div className="App">
      <header>
        Bookmarks
      </header>
      <Bookmarks bookmarks={bookmark_list}></Bookmarks>
    </div>
  );
}

export default App;
