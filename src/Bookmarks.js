import './Bookmarks.css'

function Bookmarks(props) {
  const bookmarkList = props.bookmarks.map((bookmark) =>
    <div className="bookmark">
      <a href={bookmark.href}>{bookmark.description}</a>
    </div>
  );
  return <div className="bookmarks">{bookmarkList}</div>
}

export default Bookmarks;
