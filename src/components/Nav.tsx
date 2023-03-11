import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex items-center justify-between flex-wrap bg-gray-800 text-white pt-6 pb-6 pl-12 pr-12 sm:pl-24 sm:pr-24'>
      <a className='text-xl' href={'/'}>
        Track and trace
      </a>
    </div>
  );
};

export default Nav;
