import "./list.css";
import Header from "../../component/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);

  
  const [date, setDate] = useState([
    {
      startDate: new Date(location.state.date[0].startDate),
      endDate: new Date(location.state.date[0].endDate),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const dateInputRef = useRef(null);

  const handleDateInputClick = () => {
    setOpenDate(!openDate);
  };

  const formattedDate = `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
    date[0].endDate,
    "dd/MM/yyyy"
  )}`;

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header type="list" />
      <div
        className="listContainerr"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          className="listWrapperr"
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Left Search Panel */}
          <div
            className="listSearch"
            style={{
              flex: "0 0 300px",
              padding: "20px",
              backgroundColor: "#febb02",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <h1 className="lsTitle" style={{ fontSize: "24px" }}>Search</h1>

            <div className="lsItem" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label>Destination</label>
              <input
                defaultValue={destination}
                type="text"
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>

            <div className="lsItem" style={{ display: "flex", flexDirection: "column", gap: "5px", position: "relative" }}>
              <label>Check-in Date</label>
              <input
                type="text"
                readOnly
                ref={dateInputRef}
                value={formattedDate}
                onClick={handleDateInputClick}
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              />
              {openDate && (
                <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 999 }}>
                  <DateRange
                    editableDateInputs={true}
                    onChange={(ranges) => {
                      setDate([ranges.selection]);
                      setOpenDate(false); // ✅ close the date picker after selection
                    }}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                    rangeColors={["#0071c2"]}
                  />

                </div>
              )}
            </div>

            <div className="lsItem" style={{ display: "flex", flexDirection: "column" }}>
              <label>Options</label>
              {/* Add options input fields here if needed */}
            </div>

            <button
              style={{
                padding: "10px",
                backgroundColor: "#0071c2",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Search
            </button>
          </div>

          {/* Right Result Grid */}
          <div
            className="listResult"
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              boxSizing: "border-box",
            }}
          >
            {[...Array(9)].map((_, i) => (
              <SearchItem key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
