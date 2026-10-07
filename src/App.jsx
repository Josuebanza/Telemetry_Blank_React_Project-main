import { useEffect, useState } from "react";
import MetricCard from "./components/MetricCard";
import Gauge from "./components/Gauge";
import TelemetryChart from "./components/TelemetryChart";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/dashboard_data.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>Vehicle Telemetry Dashboard</h1>

      <div className="metrics">
        <MetricCard
          title="Distance"
          value={data.summary.distance_km.toFixed(3)}
          unit="km"
        />

        <MetricCard
          title="Energy"
          value={data.summary.energy_wh.toFixed(3)}
          unit="Wh"
        />

        <MetricCard
          title="Max Speed"
          value={data.summary.max_speed_kmh.toFixed(1)}
          unit="km/h"
        />
      </div>

      <div className="gauges">
        <Gauge
          title="Max Speed"
          value={data.summary.max_speed_kmh}
          max={60}
          unit="km/h"
        />

        <Gauge
          title="Max Throttle"
          value={data.summary.max_throttle_pct}
          max={100}
          unit="%"
        />

        <Gauge
          title="Peak Power"
          value={data.summary.peak_power_w}
          max={5000}
          unit="W"
        />
      </div>
      <section className="charts">
        <TelemetryChart
          title="Speed over time"
          data={data.telemetry}
          dataKey="speed_kmh"
          unit="km/h"
        />

        <TelemetryChart
          title="Power over time"
          data={data.telemetry} 
          dataKey="power_w"
          unit="W"
        />

        <TelemetryChart
          title="Acceleration over time"
          data={data.telemetry}
          dataKey="acceleration_mps2"
          unit="m/s²"
        />

        <TelemetryChart
          title="Cumulative energy" 
          data={data.telemetry}
          dataKey="energy_wh"
          unit="Wh" 
        />
      </section>
    </main>
  );
}

export default App;
