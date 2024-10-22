import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Booksmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-amber-50 ml-3 rounded-xl p-3">
      <h2 className="text-xl font-semibold text-center">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Booksmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Booksmarks;
