import React, { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function countStatus(assets) {
  let inAlert = 0,
    inDowntime = 0,
    inOperation = 0;

  for (let key in assets) {
    if (assets[key].status === "inAlert") {
      inAlert++;
    } else if (assets[key].status === "inOperation") {
      inOperation++;
    } else if (assets[key].status === "inDowntime") {
      inDowntime++;
    }
  }

  return [
    {
      name: "Em Operação",
      y: inOperation,
      color: "#778beb",
    },
    {
      name: "Em Alerta",
      y: inAlert,
      color: "#f7b731",
    },
    {
      name: "Em Parada",
      y: inDowntime,
      color: "#eb3b5a",
    },
  ];
}

function Chart({ data }) {
  const [options, setOptions] = useState({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Status dos Sensores",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [{ name: "Quantidade", data: [] }],
  });

  useEffect(() => {
    const count = countStatus(data); //
    setOptions({ series: [{ data: count }] });
  }, [data]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Chart;
