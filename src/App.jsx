
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Booksmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
   
  }


  return (
    <div className='max-w-screen-2xl mx-auto'>
    <Header></Header>
    <div className='w-11/12 mx-auto mt-3 md:flex'>

    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

    <Booksmarks bookmarks={bookmarks}></Booksmarks>
    </div>
      

    </div>
  )
}

export default App
