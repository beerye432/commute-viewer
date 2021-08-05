import React from "react";
import './CommuteData.css';

const CommuteData = () => {

  const [commuteData, setCommuteData] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [fromValue, setFromValue] = React.useState('all');
  const [toValue, setToValue] = React.useState('all');

  React.useEffect(() => {
    fetch("/all_cd")
      .then((res) => res.json())
      .then((data) => setCommuteData(data))

    fetch("/locations")
      .then((res) => res.json())
      .then((locations) => setLocations(locations))
  }, []);

  const handleFromValueStateChange = (event) => setFromValue(event.target.value)
  const handleToValueStateChange = (event) => setToValue(event.target.value)

  const onUpdateClick = () => {
    fetch(`commute_data?from=${fromValue}&to=${toValue}`)
      .then((res) => res.json())
      .then((data) => setCommuteData(data))
  }

  return (
    <div className="CommuteData">
      <span> From </span>
      <select value={fromValue} onChange={handleFromValueStateChange}>
        <option value="All">All</option>
        { locations && locations.map(l => <option key={l.name} value={l.coordinates}>{l.name}</option>)}
      </select>
      <span>  To </span>
      <select value={toValue} onChange={handleToValueStateChange}>
        <option value="All">All</option>
        { locations && locations.map(l => <option key={l.name} value={l.coordinates}>{l.name}</option>)}
      </select>
      <button style={{marginLeft: 10}} onClick={onUpdateClick}>Update</button>
      <pre>{!commuteData ? "Loading..." : JSON.stringify(commuteData, null, 2)}</pre>
    </div>
  );
}

export default CommuteData;
