import React, { useEffect, useState } from "react";

interface imageType {
  id: string;
  url: string;
  width: string;
  height: string;
}

const CatInfo = () => {
  const [image, setImage] = useState<imageType[]>();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  }, []);

  return (
    <div className="why-cats-page">
      <h1>Why should I have a cat?</h1>
      <p>
        Having a cat as a pet can be a rewarding and fulfilling experience for
        many people. Here are some reasons why you might consider having a cat:
      </p>
      <p>
        <b>1.</b> Companionship: Cats can provide you with companionship and
        affection. They are known for forming strong bonds with their owners and
        can be a source of emotional support and comfort.
      </p>
      <p>
        <b>2.</b> Low Maintenance: Cats are generally lower maintenance than
        some other pets, such as dogs. They don't require daily walks, and they
        are usually litter-trained, which makes them more independent.
      </p>
      <p>
        <b>3.</b> Stress Reduction: Spending time with a cat can reduce stress
        and anxiety. The act of petting a cat can release endorphins, which can
        help improve your mood and reduce stress levels.
      </p>
      <p>
        <b>4.</b> Quiet and Independent: Cats are often quieter and more
        independent than dogs. They can entertain themselves and are less likely
        to disrupt your neighbors.
      </p>
      {image &&
        image.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt="Cat"
            width="600px"
            style={{ borderRadius: "1.5rem" }}
          />
        ))}
    </div>
  );
};

export default CatInfo;
