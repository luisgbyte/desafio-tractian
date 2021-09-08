import React, { useState } from "react";

import { Container, Content } from "./styles";

import ModalEditUnit from "../ModalEditUnit";

function CardUnits({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <Container>
      <ModalEditUnit isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      <Content>
        <div>
          <p>UNIDADE: {data.name}</p>
        </div>
        <div onClick={handleClick}>
          <i className="far fa-edit"></i>
        </div>
      </Content>
    </Container>
  );
}

export default CardUnits;
