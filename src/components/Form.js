import "./Form.css";
const Form = (props) => {
  const inputFilterDataHandler = (event) => {
    props.setInputFilerData(event.target.value);
  };
  return (
    <form className="search_container">
      <input
        type="text"
        placeholder="Найти"
        value={props.inputFilterData}
        onChange={inputFilterDataHandler}
        className="search"
      />
      <button type="button" className="clear_btn" onClick={props.clearFilter}>
        X
      </button>
      <button type="submit" onClick={props.filterData} className="search_btn">
        Найти
      </button>
    </form>
  );
};

export default Form;
