import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
