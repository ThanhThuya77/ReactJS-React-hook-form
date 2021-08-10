import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import DemoFormik from "./formik1";
import "./styles.scss";

function App() {
  const [open, setOpen] = useState(1);

  const renderContent = () => {
    switch (open) {
      case 1:
        return <Demo1 />;
      case 2:
        return <Demo2 />;
      case 3:
        return <Demo3 />;
      case 4:
        return <DemoFormik />;
      default:
        break;
    }
  };

  return (
    <div className="demo">
      <Button onClick={() => setOpen(1)}>Demo1</Button>
      <Button color="primary" onClick={() => setOpen(2)}>
        Demo2
      </Button>
      <Button color="secondary" onClick={() => setOpen(3)}>
        Demo3
      </Button>
      <Button onClick={() => setOpen(4)}>
        DemoFormik
      </Button>
      {renderContent()}
    </div>
  );
}

export default App;
