import "./Table.css";

const Table = (props) => {
  if (!props.cars || props.cars.length === 0) return <p>Загрузка!</p>;
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                props.sortTable();
              }}
              className="sort_btn"
            >
              {props.isSorted ? "Марка и модель \n↓ " : "Марка и модель \n↑"}
            </th>
            <th>Стандарт</th>
            <th>Эконом</th>
            <th>Комфорт</th>
            <th>Комфорт +</th>
            <th>Минивен</th>
            <th>Бизнес</th>
            <th>Лайт</th>
          </tr>
        </thead>
        <tbody>
          {props.tableCars.map((car) => (
            <tr key={Math.random() * 1000}>
              <td>
                {car.mark} {car.model}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs.Стандарт)
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Стандарт")
                  ? car.tariffs.Стандарт.year
                  : "-"}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs.Эконом)
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Эконом")
                  ? car.tariffs.Эконом.year
                  : "-"}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs.Комфорт)
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Комфорт")
                  ? car.tariffs.Комфорт.year
                  : "-"}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs["Комфорт+"])
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Комфорт+")
                  ? car.tariffs["Комфорт+"].year
                  : "-"}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs.Минивен)
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Минивен")
                  ? car.tariffs.Минивен.year
                  : "-"}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs.Бизнес)
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Бизнес")
                  ? car.tariffs.Бизнес.year
                  : "-"}
              </td>
              <td
                onClick={() =>
                  props.detailCar(car.mark, car.model, car.tariffs.Лайт)
                }
                className="cell_year"
              >
                {car.tariffs.hasOwnProperty("Лайт")
                  ? car.tariffs.Лайт.year
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
