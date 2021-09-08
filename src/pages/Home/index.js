import { useState, useEffect } from "react";

import { Container } from "./styles";
import Chart from "../../components/Chart";

import api from "../../services/api";

const Home = () => {
  const [assets, setAssets] = useState();

  useEffect(() => {
    if (!assets) {
      fetchAssets();
    }
  });
  
  async function fetchAssets() {
    await api
      .get("/assets")
      .then((response) => setAssets(response.data))
      .catch((err) => {
        alert("ops! ocorreu um erro" + err);
      });
    }
    
  return (
    <>
      <Container>
        <h3>Visão geral:</h3>
        <Chart data={assets} />
      </Container>
    </>
  );
};

export default Home;
