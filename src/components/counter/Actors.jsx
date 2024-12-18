import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Actors = () => {
  const [heroes, setHeroes] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Nikhil Uprety",
    },
    {
      id: 3,
      name: "Biraj Bhatta",
    },
    {
      id: 4,
      name: "Shubham Man Singh",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Hero List
      </Typography>
      {heroes.map((item) => {
        return (
          //   <Typography variant="subtitle" key={item.id} gutterBottom>
          //     {item.id}
          //   </Typography>

          <Stack
            key={item.id}
            direction="row"
            gap={"1rem"}
            sx={{ marginBottom: "2rem" }}
          >
            <Typography variant="h5" key={item.id} gutterBottom>
              {item.name}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                const itemId = item.id;
                const newArray = heroes.filter((item, index, array) => {
                  return item.id !== itemId;
                });
                setHeroes(newArray);
              }}
            >
              Delete
            </Button>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Actors;
