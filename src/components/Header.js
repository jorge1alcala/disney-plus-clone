import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="images/home-icon.svg" alt="home logo" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="images/search-icon.svg" alt="home logo" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="images/watchlist-icon.svg" alt="home logo" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="images/original-icon.svg" alt="home logo" />
          <span>ORIGINAL</span>
        </a>
        <a href="/">
          <img src="images/movie-icon.svg" alt="home logo" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="images/series-icon.svg" alt="home logo" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <a href="/login">
        <UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0P-dkpUbPeghLrHpnl8vOtj2d6hZBBnfkaQ&usqp=CAU" />
      </a>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-itmes: center;
  justify-content: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    &:link,
    &:visited {
      color: #fff;
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
`;
