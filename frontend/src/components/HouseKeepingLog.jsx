import React from "react";

// This component receives logs as props
function HouseKeepingLog({ logs }) {

  return (
    <div style={{ marginTop: "30px" }}>

      {/* Section heading */}
      <h2>Housekeeping Logs</h2>

      {/* If there are no logs */}
      {logs.length === 0 ? (

        <p>No logs yet</p>

      ) : (

        // Display all logs using map()
        <ul>
          {logs.map((log, index) => (

            <li key={index}>
              {log}
            </li>

          ))}
        </ul>

      )}
    </div>
  );
}

export default HouseKeepingLog;