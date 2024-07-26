import React, { useEffect, useState } from "react";
import axios from "axios";

const NVServer = () => {
  const [responseData, setResponseData] = useState("Taking Response");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://td2929815.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=816&deploy=1&compid=TD2929815&ns-at=AAEJ7tMQtd8m8NnU25YV8Jz3fcFKvt4-oCjKMQquAduzp0ahnc0");
        setResponseData(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error making request:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{error ? `Error: ${error}` : `Response: ${JSON.stringify(responseData)}`}</h1>
    </div>
  );
};

export default NVServer;
