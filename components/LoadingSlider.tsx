import { FunctionComponent } from "react";
import { Grid, Skeleton } from "@mui/material";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const LoadingSlider: FunctionComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      preloadImages={true}
      watchSlidesProgress={true}
      tag={"section"}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <Grid>
          <Skeleton
            variant="rectangular"
            height={1080}
            width={1920}
            animation="wave"
          />
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
};

export default LoadingSlider;
