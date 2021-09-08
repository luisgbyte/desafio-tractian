import React, { useState } from "react";

import { Container, Content } from "./styles";
import ModalEditUser from "../ModalEditUser";


function CardUsers({ data }) {
  
  const [isOpen, setIsOpen] = useState(false);
  
  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ModalEditUser isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      <Container>
        <Content>
          <div>
            <p>NOME: {data.name}</p>
            <p>EMAIL: {data.email}</p>
          </div>
          <div onClick={handleClick}>
            <i className="far fa-edit"></i>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default CardUsers;
