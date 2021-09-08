import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";

// import Menu from "../MenuHamburguer";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Logo" height="20px" />
        </div>
        <div>
          <div className={`menu-section${navbarOpen ? "-on" : ""}`}>
            <div className="menu-toggle" onClick={handleToggle}>
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <nav>
              <Link to="/">HOME</Link>
              <Link to="/ativos">ATIVOS</Link>
              <Link to="/empresas">EMPRESAS</Link>
              <Link to="/unidades">UNIDADES</Link>
              <Link to="/usuarios">USUÁRIOS</Link>
            </nav>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Header;
