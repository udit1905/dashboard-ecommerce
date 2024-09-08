import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationTooltip,
  AccumulationLegend,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/contextProvider";

const Doughnut = ({ id, data, legendVisibility, height }) => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <AccumulationChartComponent
        id={id}
        height={height}
        // chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: false }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white", visible: legendVisibility }}
      >
        <Inject
          services={[
            PieSeries,
            AccumulationTooltip,
            AccumulationLegend,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sales"
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: "text",
              position: "Inside",
              font: {
                fontWeight: "600",
                color: "#fff",
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Doughnut;
