import React, { useState } from "react";

import { Container, Content } from "./styles";

import ModalEditCompanies from "../ModalEditCompanies";

function CardCompanies({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Content>
        <ModalEditCompanies isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        <div>
          <p>EMPRESA: {data.name}</p>
        </div>
        <div onClick={handleClick}>
          <i className="far fa-edit"></i>
        </div>
      </Content>
    </Container>
  );
}

export default CardCompanies;
