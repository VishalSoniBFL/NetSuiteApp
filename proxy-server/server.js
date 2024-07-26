const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import cors
const app = express();
const port = 5000; // Ensure this port is not in use

// Enable CORS for all origins
app.use(cors());

// Define the route to handle your API request
app.get("/", async (req, res) => {
  const config = {
    method: "get",
    url: "https://td2929815.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=816&deploy=1&compid=TD2929815&ns-at=AAEJ7tMQtd8m8NnU25YV8Jz3fcFKvt4-oCjKMQquAduzp0ahnc0",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    maxRedirects: 5,
  };

  try {
    const response = await axios.request(config);
    res.send(response.data); // Send raw data
  } catch (error) {
    console.error("Error making request:", error.message);
    res.status(500).send("Error fetching data from NetSuite");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
