import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";

function Gallery() {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  const [index, setIndex] = React.useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  React.useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <section className="gallery">
      <div className="container">
        <div>
          <Link className="back" to="/">
            Back
          </Link>
          <div className="box">
            <div className="main-img">
              <img src={pictures[index]?.jpg.image_url}></img>
            </div>
          </div>
          <div className="picture-box">
            {pictures?.map((picture, i) => {
              return (
                <div
                  onClick={() => {
                    handleImageClick(i);
                  }}
                  className="inner-box"
                  key={i}
                >
                  <img src={picture.jpg.image_url} alt="gero-image" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
