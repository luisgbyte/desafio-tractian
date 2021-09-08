import React, { useEffect, useState } from "react";

import { Container, Content } from "./styles";

import Card from "../../components/CardUnits";
import api from "../../services/api";

function Units() {
  const [unidades, setUnidades] = useState();

  useEffect(() => {
    api
      .get("/units")
      .then((response) => setUnidades(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <Container>
      <h3>Unidades</h3>
      <Content>
        {unidades && unidades.map((empresa) => <Card key={empresa.id} data={empresa} />)}
      </Content>
    </Container>
  );
}

export default Units;
