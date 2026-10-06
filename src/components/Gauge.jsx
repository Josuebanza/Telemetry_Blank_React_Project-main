import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

function Gauge({ title, value, max, unit }) {
  const percentage = (value / max) * 100;

  const data = [
    {
      name: title,
      value: percentage
    }
  ];

  return (
    <div className="gauge-card">
      <h3>{title}</h3>

      <div className="gauge-wrapper">
        <ResponsiveContainer width="100%" height={220}>
          <RadialBarChart
            cx="50%"
            cy="100%"
            innerRadius="70%"
            outerRadius="100%"
            barSize={18}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />

            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="gauge-value">
          {value.toFixed(1)} {unit}
        </div>
      </div>
    </div>
  );
}

export default Gauge;