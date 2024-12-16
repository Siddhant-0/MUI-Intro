import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

import "./laptop.typo.style.css";

const Laptop = () => {
  let brand = "Asus";
  //   let laptopName = "Tuf F15";
  //   let specName = "i5 12th gen";
  const [laptopName, setlaptopName] = useState("TUF F15");
  const [specName, setspecName] = useState("i5 12th gen");

  return (
    <Box
      sx={{ border: "2px solid white", borderRadius: "10px", padding: "1rem" }}
    >
      <Typography className="typo" variant="h3" align="center">
        Change Laptop specs
      </Typography>
      <Typography className="typo" variant="h3" align="center">
        {`${brand} ${laptopName}`}
      </Typography>
      <Typography
        align="center"
        className="typo"
        variant="h3"
        gutterBottom
      >{`${specName}`}</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button
          align="center"
          variant="contained"
          color="success"
          onClick={() => {
            setspecName("i7 15th gen");
          }}
        >
          Change Laptop spec
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            //aut0-batching by react
            setspecName("i5 12th gen");
          }}
        >
          Reset sepcification
        </Button>
      </Box>
    </Box>
  );
};

export default Laptop;
