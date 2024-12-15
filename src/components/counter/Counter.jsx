import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

//hooks => react function which has specific task
//example => useState,useEffect,useRef,useCallback,useMemo
//third-party hooks => redux => useSelector,useDispatch\
//router => useNavigate

//? JS is event driven
//?onClick,on

const Counter = () => {
  //   let count = 1;
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    let newCount = count - 1;
    setCount(newCount);
  };
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        This is a counter app
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Count:{count}
      </Typography>

      <Box align="center">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            let newCount = count + 1;
            setCount(newCount);
          }}
        >
          Increase count
        </Button>
      </Box>

      <Box align="center">
        <Button variant="contained" color="error" onClick={decreaseCount}>
          Decrease count
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            let newCount = 0;
            setCount(newCount);
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
