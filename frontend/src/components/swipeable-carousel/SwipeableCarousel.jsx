// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { Typography } from "@mui/material";

import Project1 from "../../assets/web.png";
import Project2 from "../../assets/market.png";
import Project3 from "../../assets/app.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwipeableCarousel = () => {
  const items = [
    {
      id: 0,
      component: (
        <>
          <img src={Project2} alt="2" />

          <Typography
            variant="h3"
            align="center"
            fontWeight={"bold"}
            mt={2}
            sx={{ color: "rgb(44,50,179,1)" }}
          >
            NORIB
          </Typography>
        </>
      ),
    },
    {
      id: 1,
      component: (
        <>
          <img src={Project1} alt="1" />
          <Typography
            variant="h3"
            align="center"
            fontWeight={"bold"}
            mt={2}
            sx={{ color: "rgb(44,50,179,1)" }}
          >
            PLOTCORE
          </Typography>
        </>
      ),
    },
    {
      id: 2,
      component: (
        <>
          <img src={Project3} alt="1" />
          <Typography
            variant="h3"
            align="center"
            fontWeight={"bold"}
            mt={2}
            sx={{ color: "rgb(44,50,179,1)" }}
          >
            TGC
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {items.map(({ id, component }) => {
        return (
          <SwiperSlide key={id} style={{ height: "35vw" }}>
            {/* <motion.div whileHover={{ scale: 1.2 }} animate={{ scale: 1 }}> */}
            {component}
            {/* </motion.div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwipeableCarousel;
