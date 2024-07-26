import React, { useEffect, useState } from "react";
import axios from "axios";

const NVServer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from NetSuite</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default NVServer;
