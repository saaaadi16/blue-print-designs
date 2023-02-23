import Video from "../../assets/4k.mp4";

const Loading = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "@media (maxWidth: 720px)": {
            padding: "0 0 75% 0",
          },
          // padding: "0 0 56.25% 0",
        }}
      >
        <video
          muted
          autoPlay
          // loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          // height={"100%"}
          // style={{ zIndex: -1 }}
        >
          <source src={Video} type="video/mp4" alt={" "} />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Loading;
