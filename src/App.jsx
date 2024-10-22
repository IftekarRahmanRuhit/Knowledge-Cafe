
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Booksmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <Header></Header>
    <div className='w-11/12 mx-auto mt-3 md:flex'>
    <Blogs></Blogs>
    <Booksmarks></Booksmarks>
    </div>
      

    </>
  )
}

export default App
