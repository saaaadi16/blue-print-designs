import Video from "../../assets/presentation.mp4";

const DescriptionDisplay = () => {
  return (
    <>
      <video
        muted
        controls
        loop
        autoPlay
        width={"100%"}
        height={"auto"}
        // style={{ zIndex: -1 }}
      >
        <source src={Video} type="video/mp4" alt={" "} />
      </video>
    </>
  );
};

export default DescriptionDisplay;
