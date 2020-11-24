import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useMoviesLazyQuery } from "generated/graphql";
import React from "react";
import { Link } from "react-router-dom";

// TODO Make one reusable function for all cards
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 345,
      display: "inline-block",
      margin: 10,
    },
    media: {
      height: 300,
    },
  })
);
export const MovieList: React.FC = () => {
  const classes = useStyles();
  const [getMovies, { loading, data, error }] = useMoviesLazyQuery();

  React.useEffect(() => {
    getMovies();
    // TODO Demonstration to auto-fetch on any errors, ideally should use sockets.
    if (error) {
      setTimeout(() => {
        getMovies();
      }, 2000);
    }
  }, [getMovies, error]);
  if (error) {
    return <h2>Error loading Movies, trying again...</h2>;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      <h2>Classic movies at home</h2>
      {data?.movies?.map((movie) => (
        <Link to={`/movie/${movie.ID}`} key={movie.ID}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movie.Poster}
                title={movie.Title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.Title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </>
  );
};
