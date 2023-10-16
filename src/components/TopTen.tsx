import { useEffect, useState } from "react";

type BreedType = {
  name: string;
  description: string;
  reference_image_id: string;
  [propName: string]: any;
};

const TopTen = () => {
  const [topTen, setTopTen] = useState<BreedType[]>();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTopTen(data);
      });
  }, []);

  return (
    <div>
      <h1>Top 10 most searched breeds</h1>
      {topTen &&
        topTen.map((b, i) => {
          return (
            <div key={i} className="top-breed-container">
              <img
                src={`https://cdn2.thecatapi.com/images/${b.reference_image_id}.jpg`}
                alt="cat"
                width="200px"
              />
              <div>
                <p className="top-ten-breed-title">{`${i + 1}. ${b.name}`}</p>
                <p>{b.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TopTen;
