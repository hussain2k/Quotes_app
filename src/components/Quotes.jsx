import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import { Button, CardActionArea, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import GenQuotes from "./GenQuotes";

function Quotes() {
  const [data, setData] = useState([]);
  const [isError, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <div>
        <Button variant="contained">Create new Quotes</Button>
      </div>

      <h1>Quotes</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="data_display">
        {data.map((post) => {
          const { id, text, author } = post;
          return (
            <Card
              key={id}
              sx={{
                maxWidth: 345,
                padding: 2,
                marginBottom: 3,
                backgroundColor: "navajowhite",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="caption "
                    mt={2}
                    component="div"
                  >
                    {author.split(",").slice(0, 1)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Quotes;
