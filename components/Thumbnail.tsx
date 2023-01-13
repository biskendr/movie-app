import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState, useEffect } from "react";
import { Grid, Typography, Skeleton } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../types/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  movies: Movie[] | number;
};

const Thumbnail: FunctionComponent<Props> = ({ movies }) => {
  if (typeof movies === "number") {
    return <ErrorPage statusCode={movies} />;
  }
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      slidesPerGroup={4}
      loop={true}
      tag={"section"}
      watchSlidesProgress={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        50: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      style={{ padding: "4em" }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {movies?.map((movie) => (
        <SwiperSlide key={movie.id} tag={"article"}>
          {({ isVisible }) => (
            <Grid sx={{ maxWidth: "300px" }}>
              {isVisible && (
                <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                        : "/NonePoster.webp"
                    }
                    alt={`${movie.title}`}
                    height={500}
                    width={342}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <Typography variant="h6" component="h3">
                    {movie.title}
                  </Typography>
                </Link>
              )}
            </Grid>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Thumbnail;
