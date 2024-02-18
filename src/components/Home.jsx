import React from "react";

//config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//hook
import { useHomeFetch } from "../hooks/useHomeFetch";

//images
import NoImage from "../images/no_image.png";

//helpers
import { randomArray } from "../helpers";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  const randomNumber = randomArray(state.results.length);

  if (error) return <div>Something went wrong...</div>;

  console.log(state.results);

  return (
    <>
      {!searchTerm && state.results[randomNumber] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomNumber].backdrop_path}`}
          title={state.results[randomNumber].title}
          text={state.results[randomNumber].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Results:" : "Popular Movies"}>
        {state.results &&
          state.results.length > 0 &&
          state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
              title={movie.title}
              release={movie.release_date}
            />
          ))}
      </Grid>

      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
