import styled from "styled-components";

export const Container = styled.div`
  background: #ced4da;
`;

export const Content = styled.div`
  height: 6.4rem;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  nav {
    display: flex;
    align-items: flex-end;
    a {
      font-weight: 600;
      font-size: 1.4rem;
      margin-right: 4rem;
      color: #185ef6;
    }
  }

  //break
  @media (max-width: 670px) {
    nav {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #fff;
      height: 3px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 30px;
      height: 30px;
      margin-right: 20px;
    }

    .menu-section-on {
      position: fixed;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: #eee;

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;

      scroll-margin: 0;
    }

    .menu-section-on nav {
      display: flex;
      flex-direction: column;
      a {
        font-size: 2rem;
        line-height: 4rem;
      }
    }

    .menu-section-on .menu-toggle {
      position: absolute;
      right: 0;
      top: 15px;
    }

    .menu-section-on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section-on .menu-toggle .two {
      opacity: 0;
    }

    .menu-section-on .menu-toggle .three {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
`;