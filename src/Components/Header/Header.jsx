import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='w-11/12 mx-auto mt-5 flex justify-between items-center border-b-2 p-3'>
            <h1 className='text-2xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;