import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import { CustomTypographyBody } from "../custom-typography/CustomTypography";

const items = [
  { id: 0, text: "Web Design" },
  { id: 1, text: "Web Development" },
  { id: 2, text: "Web Scrapping" },
  { id: 3, text: "Chat Bots" },
  { id: 4, text: "UI / UX Design" },
  { id: 5, text: "App Development" },
  { id: 6, text: "Automation Bots" },
  { id: 7, text: "Data Science" },
];

const ProjectMarque = () => {
  return (
    <>
      <Marquee gradientColor={[0, 0, 0]} speed={60} pauseOnHover>
        {items.map(({ text, id }) => {
          return (
            <Fragment key={id}>
              <CustomTypographyBody ml={2}>▪</CustomTypographyBody>
              <CustomTypographyBody ml={2}>
                {text.toLocaleUpperCase()}
              </CustomTypographyBody>
              {/* <Typography sx={{ ml: 2 }}>▪</Typography>
              <Typography sx={{ ml: 2 }}>{text.toLocaleUpperCase()}</Typography> */}
            </Fragment>
          );
        })}
      </Marquee>
    </>
  );
};

export default ProjectMarque;
