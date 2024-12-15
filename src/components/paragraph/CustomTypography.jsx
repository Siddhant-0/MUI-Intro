import { Typography } from "@mui/material";
import React from "react";

const CustomTypography = () => {
  return (
    <div>
      {/* Typography is MUI equivalent to <p> */}
      <Typography variant="h1" color="primary">
        Header1
      </Typography>
      <Typography variant="h2" color="secondary">
        Header2
      </Typography>
      <Typography variant="h3" color="error" sx={{ fontSize: "100px" }}>
        {/* sx is used for custom designs */}
        Header3
      </Typography>
      <Typography variant="h4">Header4</Typography>
      <Typography variant="h5">Header5</Typography>
      <Typography>Paragraph</Typography>
      <Typography variant="subtitle1">Subtitle One</Typography>
    </div>
  );
};

export default CustomTypography;
