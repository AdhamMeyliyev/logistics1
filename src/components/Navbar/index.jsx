import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PROTECTED_ROUTES_ARRAY } from '../../routes';

const Navbar = () => {
  return (
    <>
      <Container>
        <div className='nav'>
          <span>Logo</span>
          {PROTECTED_ROUTES_ARRAY.map((navItem) => (
            <Link key={navItem.path} to={navItem.path}>
              {navItem.title}
            </Link>
          ))}
          <span>smth</span>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #000;
  }
  .nav {
    display: flex;
    justify-content: space-between;
  }
`;

export default Navbar;
