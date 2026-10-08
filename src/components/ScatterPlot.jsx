import {
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ScatterPlot({
  title,
  data,
  xKey,
  yKey,
  xLabel,
  yLabel,
  xUnit,
  yUnit
}) {
  return (
    <div className="chart-card">
      <h3>{title}</h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsScatterChart>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              type="number"
              dataKey={xKey}
              name={xLabel}
              unit={xUnit}
            />

            <YAxis
              type="number"
              dataKey={yKey}
              name={yLabel}
              unit={yUnit}
            />

            <Tooltip />

            <Scatter
              data={data}
              
                            
            />
          </RechartsScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ScatterPlot;