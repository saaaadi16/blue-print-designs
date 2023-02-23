exports.emailTemplateBP = (props) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>User Information</title>
      <style type="text/css">
        /* Dark-themed styling */
        body {
          background-color: #2b2b2b;
          font-family: Arial, sans-serif;
          color: #fff;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 20px;
        }
        th, td {
          border: 1px solid #fff;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #4d4d4d;
        }
        td {
          background-color: #666666;
        }
      </style>
    </head>
    <body>
      <h1>User Information</h1>
      <table>
        <tr>
          <th>Name</th>
          <td>${props.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${props.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${props?.phone}</td>
        </tr>
        <tr>
          <th>Message</th>
          <td>${props?.org}</td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
