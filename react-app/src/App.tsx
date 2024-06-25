// import ListGroup from "./componets/ListGroup";

import { Button } from "./componets/Button";
import { Alert } from "./componets/Alert";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisablility] = useState(false);

  // let items = ["New York", "Tokyo", "London", "Paris", "San Francisco"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisablility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisablility(true)}>My button</Button>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
