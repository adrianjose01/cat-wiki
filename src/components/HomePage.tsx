import background from "../assests/HeroImagemd.png";
import { Link, useNavigate } from "react-router-dom";
import WhyCat from "./WhyCat";
import Logo from "../assests/CatwikiLogo.svg";
import Loupe from "../assests/loupe.png";
import { useEffect, useState, useRef } from "react";
import TopFour from "./TopFour";
import { Modal } from "./Modal";

const HomePage = () => {
  const [breeds, setBreeds] = useState<any[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const history = useNavigate();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const value = breeds?.filter((b) => b.name === inputRef.current?.value)[0];
    history(`/breed/${value.id}`);
  };

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
      });
  }, []);

  return (
    <>
      <div
        className="header"
        style={{ backgroundImage: `url(${background.toString()})` }}
      >
        <img src={Logo.toString()} alt="Logo" className="Logo" />
        <p>Get to know more about your cat breed</p>
        <form id="form" onSubmit={onSubmitHandler}>
          <input
            id="input"
            ref={inputRef}
            type="text"
            placeholder="Enter your breed"
            list="cat-breeds"
          />
          <button type="submit">
            <img src={Loupe} alt="Loupe" />
          </button>
        </form>
        <button className="mobile-open-search" onClick={() => setIsOpen(true)}>
          Enter your breed
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <form id="form-mobile" onSubmit={onSubmitHandler}>
            <input
              id="input-mobile"
              ref={inputRef}
              type="text"
              placeholder="Enter your breed"
              list="cat-breeds"
            />
            <button className="btn-mobile" type="submit">
              <img src={Loupe} alt="" />
            </button>
          </form>
          <button
            className="btn-mobile-cancel"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </Modal>
        <datalist id="cat-breeds">
          {breeds &&
            breeds.map((b) => {
              return <option key={b.id} value={b.name}></option>;
            })}
        </datalist>
      </div>
      <div className="top-breeds">
        <p>Most Searched Breeds</p>
        <div className="borderline" />
        <h1>66+ Breeds For you to discover</h1>
        <div className="end">
          <Link className="top-breeds-link" to="/top-ten">
            SEE MORE
          </Link>
        </div>
        <TopFour />
      </div>
      <WhyCat />
    </>
  );
};

export default HomePage;
