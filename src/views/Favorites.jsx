import { useState, useEffect, useContext } from "react";
import IconHeart from "../components/IconHeart";
import { CounterContext } from "../context/CounterContext";

const Favorites = () => {
  const [data, setData] = useState(null);
  const { favList, setFavList } = useContext(CounterContext);

  const getPhotos = async () => {
    const url = "/photos.json";
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleClick = (id) => {
    if (favList.includes(id)) {
      setFavList(favList.filter((item) => item !== id));
    } else {
      setFavList([...favList, id]);
    }
  };

  if (!data || !data.photos) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {data.photos.map((image) =>
          favList.includes(image.id) ? (
            <div
              key={image.id}
              style={{
                height: "30vh",
                width: "30vh",
                backgroundImage: `url(${image.src.medium})`,
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                alignItems: "end",
                color: "white",
                padding: "10px",
              }}
            >
              <div onClick={() => handleClick(image.id)}>
                <IconHeart filled={favList.includes(image.id)} />
              </div>
              <p>{image.alt}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default Favorites;
