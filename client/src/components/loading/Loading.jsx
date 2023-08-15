import loading from "../../assets/images/loading2.gif";

function Loading() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <img src={loading} alt="Loading" style={{ width: "700px" }} />
      </div>
    </>
  );
}

export default Loading;
