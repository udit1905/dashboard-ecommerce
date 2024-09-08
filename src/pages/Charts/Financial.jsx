import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  HiloSeries,
  DateTime,
  Zoom,
  Crosshair,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/contextProvider";

const date2 = new Date("2017 , 1 , 1");

function filterValue(value) {
  if (value.x >= date2) {
    return { x: value.x, high: value.high, low: value.low };
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Chart" title="Samsung History" />
      </div>
      <ChartComponent
        id="financial-chart"
        // height="420px"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white" }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
      >
        <Inject
          services={[
            Tooltip,
            HiloSeries,
            Zoom,
            Crosshair,
            Logarithmic,
            DateTime,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="Samsung"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
