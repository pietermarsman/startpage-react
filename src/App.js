import './App.css';
import BookmarkPane from "./Bookmarks";
import bookmarksList from "./bookmark_list";

function App() {
  return (
    <div className="App">
      <header>
        Bookmarks
      </header>
      <BookmarkPane bookmarks={bookmarksList}/>
    </div>
  );
}

export default App;
