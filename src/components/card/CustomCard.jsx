import React from "react";
import { Button, IconButton } from "@mui/material";
import "./card.style.css";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { green } from "@mui/material/colors";
import SelectInput from "@mui/material/Select/SelectInput";

const CustomCard = () => {
  return (
    <section>
      <h1>Fictions</h1>

      <section className="body">
        <div className="card">
          <img
            src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/07/Dark.jpg"
            alt="Dark"
            className="image"
          />
          <p style={{ padding: "1rem", textAlign: "justify" }}>
            When two children go missing in a small German town, its sinful past
            is exposed along with the double lives and fractured relationships
            that exist among four families as they search for the kids. The
            mystery-drama series introduces an intricate puzzle filled with
            twists that includes a web of curious characters, all of whom have a
            connection to the towns troubled history -- whether they know it or
            not. The story includes supernatural elements that tie back to the
            same town in 1986.Dark represents the first German original series
            produced for Netflix.
          </p>
          <div id="Button" className="button">
            <Button variant="outlined">Learn More</Button>
            <Button variant="outlined">Share</Button>
            <IconButton style={{ color: "green" }}>
              <FavoriteTwoToneIcon />
            </IconButton>
          </div>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU03pipU9IkPLKHriTJPGTekGA7FnIJw15A&s"
            alt="The Boys"
            className="image"
          />
          <p style={{ padding: "1rem", textAlign: "justify" }}>
            The Boys is an American satirical superhero television series
            developed by Eric Kripke for Amazon Prime Video. Based on the comic
            book of the same name by Garth Ennis and Darick Robertson, it
            follows the eponymous team of vigilantes as they combat superpowered
            individuals who abuse their powers for personal gain and work for a
            powerful company that ensures the general public views them as
            heroes. The series features an ensemble cast that includes Karl
            Urban, Jack Quaid, Antony Starr, Erin Moriarty, Dominique
            McElligott, Jessie T.
          </p>
          <div id="Button" className="button">
            <Button variant="outlined">Learn More</Button>
            <Button variant="outlined">Share</Button>
            <IconButton style={{ color: "green" }}>
              <FavoriteTwoToneIcon />
            </IconButton>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CustomCard;
