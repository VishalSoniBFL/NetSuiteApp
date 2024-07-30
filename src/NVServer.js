import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FlipCardDisplay.css";

const FlipCardDisplay = () => {
  const [responseData, setResponseData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [filters, setFilters] = useState({
    customer: "",
    postingPeriod: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://td2929815.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=816&deploy=1&compid=TD2929815&ns-at=AAEJ7tMQtd8m8NnU25YV8Jz3fcFKvt4-oCjKMQquAduzp0ahnc0"
        );
        setResponseData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error making request:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = new Set(prevSelectedCards);
      if (newSelectedCards.has(id)) {
        newSelectedCards.delete(id);
      } else {
        newSelectedCards.add(id);
      }
      return newSelectedCards;
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (newFilters) => {
    let data = [...responseData];

    if (newFilters.customer) {
      data = data.filter((item) => item.values.entity[0].text.toLowerCase().includes(newFilters.customer.toLowerCase()));
    }

    if (newFilters.postingPeriod) {
      data = data.filter((item) => item.values.postingperiod[0].text.toLowerCase().includes(newFilters.postingPeriod.toLowerCase()));
    }

    if (newFilters.status) {
      data = data.filter((item) => item.values.statusref[0].text.toLowerCase().includes(newFilters.status.toLowerCase()));
    }

    setFilteredData(data);
  };

  const uniqueValues = (key) => {
    const values = responseData.map((item) => item.values[key][0].text);
    return [...new Set(values)];
  };

  const handleSubmit = () => {
    const selectedIds = Array.from(selectedCards).join(", ");
    alert(`Selected Sales Order IDs: ${selectedIds}`);
    window.location.reload();
  };

  return (
    <div>
      <div className="filters">
        <select name="customer" onChange={handleFilterChange} value={filters.customer}>
          <option value="">All Customer</option>
          {uniqueValues("entity").map((customer, index) => (
            <option key={index} value={customer}>
              {customer}
            </option>
          ))}
        </select>

        <select name="postingPeriod" onChange={handleFilterChange} value={filters.postingPeriod}>
          <option value="">All Posting Period</option>
          {uniqueValues("postingperiod").map((period, index) => (
            <option key={index} value={period}>
              {period}
            </option>
          ))}
        </select>

        <select name="status" onChange={handleFilterChange} value={filters.status}>
          <option value="">All Status</option>
          {uniqueValues("statusref").map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="card-container">
        {error ? (
          <h1>Error: {error}</h1>
        ) : (
          filteredData.map((item) => (
            <div className={`flip-card ${selectedCards.has(item.id) ? "selected" : ""}`} key={item.id} onClick={() => handleCardClick(item.id)}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Order ID: {item.id}</h3>
                  <p>Tran ID: {item.values.tranid}</p>
                  <p>Amount: ${item.values.amount}</p>
                </div>
                <div className="flip-card-back">
                  <p>Date: {item.values.trandate}</p>
                  <p>Customer: {item.values.entity[0].text}</p>
                  <p>Status: {item.values.statusref[0].text}</p>
                  <p>Posting Period: {item.values.postingperiod[0].text}</p>
                  <p>Email: {item.values["customer.email"] || "N/A"}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FlipCardDisplay;
