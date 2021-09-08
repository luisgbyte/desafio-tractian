import React, { useEffect, useState } from "react";

import { Container, Content } from "./styles";

import Card from "../../components/CardUsers";
import api from "../../services/api";

function Users() {
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsuarios(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <Container>
      <h3>Usuários</h3>
      <Content>
        {usuarios && usuarios.map((empresa) => <Card key={empresa.id} data={empresa} />)}
      </Content>
    </Container>
  );
}

export default Users;
