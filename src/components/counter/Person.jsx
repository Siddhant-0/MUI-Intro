import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFullName } from "../../utils/utils";

const Person = () => {
  //   let firstName = "Siddhant";
  //   let lastName = "Shrestha";
  let collegeName = "KEC";

  const [firstName, setFirstName] = useState("Siddhant");
  const [lastName, setLastName] = useState("Shrestha");
  const [gender, setgender] = useState("Male");

  return (
    <Box>
      <Typography variant="h3">
        Name : {getFullName(firstName, lastName)}
      </Typography>
      <Typography variant="h3"> {`${collegeName}`}</Typography>
      <Typography variant="h3"> {`${gender}`}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          //aut0-batching by react
          setFirstName("Pratik");
          setLastName("Acharya");
          setgender("Female");
        }}
      >
        Change Person Identity
      </Button>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          //aut0-batching by react
          setFirstName("Siddhant");
          setLastName("Shrestha");
          setgender("Male");
        }}
      >
        Reset Person Identity
      </Button>
    </Box>
  );
};

export default Person;
