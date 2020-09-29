import React from "react";

function Employees() {
  const employees = [
    { name: "cerulean", job: "Bouncer" },
    { name: "fuchsia", job: "Janitor" },
    { name: "tigerlily", job: "Bartender" },
    { name: "turquoise", job: "Aspiring Actress" }
  ];

  return (
    <div>
      <table>
        <thead>
          <th style={{ border: "1px solid" }}>Name</th>
          <th style={{ border: "1px solid" }}>Job</th>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr>
              <td style={{ border: "1px solid" }}>{data.name}</td>
              <td style={{ border: "1px solid" }}>{data.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
