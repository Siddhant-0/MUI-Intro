import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  const [student, setStudent] = useState({
    name: "Suyasha Nepal",
    age: 19,
  });

  return (
    <Box sx={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
      <Typography variant="h3" gutterBottom>
        Name:{student.name}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {student.age}
      </Typography>
      <TextField
        label="Name"
        color="success"
        gutterBottom
        onChange={(e) => {
          const naam = e.target.value;
          setStudent({ ...student, name: naam });
        }}
      ></TextField>
      <TextField
        label="Age"
        color="success"
        type="number"
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...student, age: age });
        }}
      ></TextField>
    </Box>
  );
};

export default Animal;
