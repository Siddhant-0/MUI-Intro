import { Button, IconButton } from "@mui/material";
import React from "react";
import "./button.style.css";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const CustomButton = () => {
  return (
    <div>
      <section id="variant-section" className="button-section">
        <h3>Button Variant</h3>
        <Button variant="text">Text</Button>
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Outlined</Button>
      </section>

      <section id="colour-section" className="button-section">
        <h3>Color Variant</h3>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button sx={{ background: "white", color: "#81BFDA" }}>Random</Button>
      </section>
      <section id="size-button" className="button-section">
        <h3>Button Size</h3>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained">default medium</Button>
        <Button variant="contained" size="large">
          HUGE
        </Button>
      </section>
      <section id="icon-button" className="button-section">
        <h3>Button with icon</h3>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteOutlineSharpIcon />}
          onClick={() => {
            alert("Deleted Successfully");
          }}
        >
          Delete Product
        </Button>
        <Button
          variant="outlined"
          color="success"
          endIcon={<EditOutlinedIcon />}
        >
          Edit Product
        </Button>
      </section>
      <section>
        <h3>Icon button </h3>
        <IconButton sx={{ color: "red" }}>
          <DeleteOutlineSharpIcon />
        </IconButton>
        <IconButton color="success">
          <EditOutlinedIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
