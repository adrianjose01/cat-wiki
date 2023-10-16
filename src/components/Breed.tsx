import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Breed = () => {
  const [breed, setBreed] = useState<any[]>();
  const { breedId } = useParams();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => {
        setBreed(data);
      });
  }, [breedId]);
  return (
    <>
      {breed &&
        breed
          .filter((b) => b.id === breedId)
          .map((b) => (
            <div key={b.id} className="single-breed">
              <div>
                <img
                  src={`https://cdn2.thecatapi.com/images/${b.reference_image_id}.jpg`}
                  alt="Cat"
                  className="single-breed-img"
                />
              </div>
              <div>
                <h1>{b.name}</h1>
                <p>{b.description}</p>
                <p>
                  <b>Temperament:</b> {b.temperament}
                </p>
                <p>
                  <b>Origin:</b> {b.origin}
                </p>
                <p>
                  <b>Life Span:</b> {b.life_span}
                </p>
                <p>
                  <b>Life Span:</b> {b.life_span}
                </p>
                <p>
                  <b>Adaptability:</b> {`${b.adaptability}/5`}
                </p>
                <p>
                  <b>Affection Level:</b> {`${b.affection_level}/5`}
                </p>
                <p>
                  <b>Child Friendly:</b> {`${b.child_friendly}/5`}
                </p>
                <p>
                  <b>Stranger friendly:</b> {`${b.stranger_friendly}/5`}
                </p>
                <p>
                  <b>Grooming:</b> {`${b.grooming}/5`}
                </p>
                <p>
                  <b>Intelligence:</b> {`${b.intelligence}/5`}
                </p>
                <p>
                  <b>Health issues:</b> {`${b.health_issues}/5`}
                </p>
                <p>
                  <b>Social needs:</b> {`${b.social_needs}/5`}
                </p>
                <p>
                  <b>Energy level:</b> {`${b.energy_level}/5`}
                </p>
              </div>
            </div>
          ))}
    </>
  );
};

export default Breed;
