const SelectedCats = ({ selectedCats }) => {
  return (
    <div>
      <h2>We found {selectedCats.length} for you!</h2>

      {selectedCats.map((cat) => (
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          <p>{cat.description}</p>
          <p>{cat.temperament}</p>
          {cat.image ? <img src={cat.image.url} alt={cat.name} /> : null}
        </div>
      ))}
    </div>
  );
};

export default SelectedCats;
