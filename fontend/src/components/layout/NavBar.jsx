import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // const [menu, setMenu] = useState(true);
  return (
    <Fragment>
      <div className='navbar text-primary'>
        <h1>
          <i class='fad fa-shopping-cart' /> BASEVEL
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/'>Login</Link>
          </li>
        </ul>
      </div>
      {/* <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          zIndex: '2',
        }}
        onClick={() => setMenu(!menu)}>
        {menu ? (
          <i class='fas fa-bars menu '></i>
        ) : (
          <i class='far fa-times cross'></i>
        )}
      </div> */}
    </Fragment>
  );
};

export default NavBar;
