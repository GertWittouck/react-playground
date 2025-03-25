import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New york",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Brussel",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
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
