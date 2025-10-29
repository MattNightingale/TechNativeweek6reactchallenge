function Drinks({ drinks }) {
  return (
    <div className="drinks__wrapper">
      {drinks.map((drink) => {
        return (
          <div className="tile" key={drink[0].id}>
            <li className="item">
              <h2 className="caption">{drink[0].name}</h2>
              <img className="thumbNail" src={drink[0].image} />
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Drinks;
