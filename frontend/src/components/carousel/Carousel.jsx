// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";

import Project1 from "../../assets/project 1.png";
import Project2 from "../../assets/project 2.jpeg";
import Project3 from "../../assets/project 3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/autoplay";

import "./Carousel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
// import { Box } from "@mui/material";

const Carousel = () => {
  // SwiperCore.use([Autoplay]);

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
    <>
      <Box mt={0.75}>
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {items.map(({ id, component }) => {
            return (
              <SwiperSlide key={id}>
                <motion.div whileHover={{ scale: 1.2 }} animate={{ scale: 1 }}>
                  {component}
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};

export default Carousel;
