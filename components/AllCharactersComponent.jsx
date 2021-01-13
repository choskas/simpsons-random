import { isEmpty, isNil } from "lodash";

const AllCharactersComponent = (props) => {
  const { characters } = props;
  return (
    <div className="all-characters-main-container">
      {isEmpty(characters) === false && isNil(characters) === false ? (
        characters.map((item) => {
          return (<div className="one-character-container">
                          <img
              className="main-image"
              src={item.image}
              alt="simpson-img"
            />
              <h4>{item.character}</h4>
              <p className="quote">{item.quote}</p>
          </div>)
        })
      ) : (
        <div className="loader-container">
          {" "}
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default AllCharactersComponent;
