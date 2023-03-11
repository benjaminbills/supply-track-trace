import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex items-center justify-between flex-wrap bg-gray-800 text-white p-6'>
      <a className='text-xl' href={'/'}>
        Track and trace
      </a>
    </div>
  );
};

export default Nav;
