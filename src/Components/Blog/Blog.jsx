import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog ,handleAddToBookmark}) => {

   const{title,cover,author,author_img,reading_time,posted_date,hashtags} = blog
    return (
        <div className='mb-16'>
            <img className='w-full rounded-lg' src={cover} alt={`cover picture of ${title}`}/>
            <div className='flex justify-between mt-8'>
                <div className='flex justify-between items-center'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl font-semibold mt-6'>{title}</h3>
            <p className='font-light mt-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}  </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func.isRequired
}

export default Blog;