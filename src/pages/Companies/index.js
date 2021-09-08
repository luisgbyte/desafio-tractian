import React, { useEffect, useState } from "react";

import { Container, Content } from "./styles";

import Card from "../../components/CardCompanies";
import api from "../../services/api";

function Companies() {
  const [empresas, setEmpresas] = useState();

  useEffect(() => {
    api
      .get("/companies")
      .then((response) => setEmpresas(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <Container>
      <h3>Empresas</h3>
      <Content>
        {empresas && empresas.map((empresa) => <Card key={empresa.id} data={empresa} />)}
      </Content>
    </Container>
  );
}

export default Companies;
