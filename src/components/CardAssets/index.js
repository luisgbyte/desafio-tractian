import React from "react";

import { Container, Content } from "./styles";

function CardAssets({ asset }) {

  return (
    <Container>
      <Content>
          <img src={asset.image} alt={asset.name} />
        <div>
          <p>ID: {asset.id}</p>
          <p>NOME: {asset.name}</p>
          <p>SENSOR: {asset.sensors[0]}</p>
          <p>MODELO: {asset.model}</p>
          <p>STATUS: {asset.status}</p>
          <p>SAÚDE: {asset.healthscore}</p>
        </div>
      </Content>
    </Container>
  );
}

export default CardAssets;
