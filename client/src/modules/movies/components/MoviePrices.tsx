import {
  Button,
  Card,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useMoviePricesLazyQuery } from "generated/graphql";
import React from "react";
import { Link, useParams } from "react-router-dom";

// TODO Make one reusable function for all cards
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: `0 auto`,
    },
    media: {
      height: 300,
      paddingTop: "56.25%", // 16:9
    },
  })
);

export const MoviePrices: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [getMoviePrices, { loading, data, error }] = useMoviePricesLazyQuery({
    variables: { id },
  });

  React.useEffect(() => {
    getMoviePrices();
    // TODO Demonstration to auto-fetch on any errors, ideally should use sockets.
    if (error) {
      setTimeout(() => {
        getMoviePrices();
      }, 3000);
    }
  }, [getMoviePrices, error]);

  if (error) {
    return (
      <div>
        <h2>
          Error loading Movie Prices, please bear with us. Trying again...
        </h2>
      </div>
    );
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (data && data.moviePrices.length) {
    const { moviePrices } = data;
    return (
      <>
        <Button component={Link} to={"/"} variant="contained" color="primary">
          Back
        </Button>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={moviePrices[0].Poster}
            title={moviePrices[0].Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {moviePrices[0].Title}
            </Typography>
            {moviePrices.map((movie, index) => (
              <h4 key={`${index}-${movie.ID}`}>
                {movie.Provider}: ${movie.Price}
              </h4>
            ))}
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <h2>
      No Movie in our system{" "}
      <Button
        onClick={() => getMoviePrices()}
        variant="contained"
        color="primary"
      >
        Retry
      </Button>
    </h2>
  );
};
