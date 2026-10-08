import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TelemetryChart({ title, data, dataKey, unit }) {
  return (
    <div className="chart-card">
      <h3>{title}</h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="time_s"
              type="number"
              domain={["dataMin", "dataMax"]}
              tickFormatter={(value) => `${value.toFixed(0)}s`}
            />

            <YAxis />

            <Tooltip
              formatter={(value) => `${Number(value).toFixed(2)} ${unit}`}
              labelFormatter={(value) => `Time: ${Number(value).toFixed(2)} s`}
            />

            <Line
              type="linear"
              dataKey={dataKey}
              stroke="#6366f1"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TelemetryChart;
