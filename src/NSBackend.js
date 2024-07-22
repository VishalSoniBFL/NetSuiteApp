import React, { useState, useEffect } from "react";
import axios from "axios";

const NSBackend = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: "get",
        url: "https://td2929815.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=810&deploy=1",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth realm="TD2929815",oauth_consumer_key="679ae2e6dc8ef0a5f83ab3eaac8726d09ccd0796c8b36780db1ea0617d80315e",oauth_token="be197d47f2b1925dd5ba1e1e7082c23707b1582b5934581381f4c26317950150",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1721640213",oauth_nonce="hXG2DO1JZNX",oauth_version="1.0",oauth_signature="B2FZaaGIByPSTvAtuovsMOoZJOsFSh16wmXVjXNND%2BI%3D"`,
        },
      };

      try {
        const response = await axios.request(config);
        console.log("Response Data:", response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (responseData) {
    return <div>Response Data: {JSON.stringify(responseData)}</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default NSBackend;
