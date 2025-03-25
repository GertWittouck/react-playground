import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  /*   let items = [
    "New york",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Brussel",
  ]; */

  const [cities, setCities] = useState([]);
  useEffect(() => {
    // Fetch data from json-server
    fetch("http://localhost:3001/cities")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={cities.map((city: any) => city.name)}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Save me Now!!!</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Save me
      </Button>
    </div>
  );
}

export default App;
