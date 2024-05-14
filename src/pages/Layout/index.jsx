import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <Container>
        <div className='layout'>
          <header>
            <Navbar />
          </header>
          <main>
            <Outlet />
          </main>
          <footer>Footer</footer>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1320px;
  margin: 0 auto;

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .layout main {
    flex-grow: 1;
  }
`;
