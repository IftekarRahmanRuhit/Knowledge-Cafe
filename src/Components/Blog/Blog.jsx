import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
   const{title,cover,author,author_img,reading_time,posted_date,hashtags} = blog
    return (
        <div>
            <img src={cover} alt={`cover picture of ${title}`}/>
            <div className='flex justify-between '>
                <div className='flex justify-between items-center'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object
}

export default Blog;