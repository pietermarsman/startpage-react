import './Bookmarks.css'
import {onlyUnique} from "./util";

function Bookmark(props) {
  return (
    <div className="bookmark">
      <a href={props.data.href}>
        {props.data.description}
      </a>
    </div>
  )
}

function Bookmarks(props) {
  const bookmarksHtmls = props.bookmarks
    .sort((a, b) => -a.time.localeCompare(b.time))
    .map(b => <Bookmark data={b}/>)
  return (
    <div>
      <h2>
        {props.section}
      </h2>
      <div className="bookmarks">
        {bookmarksHtmls}
      </div>
    </div>
  )
}

function BookmarkPane(props) {
  const sections = props.bookmarks.map(b => b.section)
    .filter(onlyUnique)
    .sort((a, b) => a.localeCompare(b))
  const sectionHtml = sections
    .map(s => [s, props.bookmarks.filter(b => b.section === s)])
    .map(([s, bookmarks]) => (<Bookmarks section={s} bookmarks={bookmarks}/>))
  return <div>{sectionHtml}</div>
}

export default BookmarkPane;
