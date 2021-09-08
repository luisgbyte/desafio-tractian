import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

import Card from "../../components/CardAssets";
import api from "../../services/api";

function Assets() {
  const [assets, setAssets] = useState();

  useEffect(() => {
    api
      .get("/assets")
      .then((response) => setAssets(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <h3>Ativos</h3>
      <Content>
          {assets &&
            assets.map((asset) => <Card key={asset.id}  asset={asset} />)}
      </Content>
    </Container>
  );
}

export default Assets;
