const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
};

export default Filter;
