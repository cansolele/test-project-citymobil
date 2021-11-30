import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import Table from "./components/Table";

const App = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isSorted, setIsSorted] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [inputFilterData, setInputFilerData] = useState("");
  const [resultData, setResultData] = useState("Выберите автомобиль!");
  const tableCars = isFiltered ? filteredCars : cars;
  useEffect(() => {
    const apiUrl =
      "https://my-json-server.typicode.com/cansolele/jsonserver/cars";
    axios.get(apiUrl).then((resp) => {
      setCars(resp.data);
    });
  }, [setCars]);

  const sortTable = () => {
    let sortCars;
    if (isSorted) {
      sortCars = tableCars.sort((a, b) => {
        return b.mark > a.mark ? 1 : -1;
      });
    } else {
      sortCars = tableCars.sort((a, b) => {
        return a.mark > b.mark ? 1 : -1;
      });
    }
    setIsSorted(!isSorted);
    setFilteredCars(sortCars);
  };
  const checkYear = (element, data) => {
    if (element.tariffs.hasOwnProperty("Стандарт")) {
      if (element.tariffs.Стандарт.year.toString() === data) return true;
    }
    if (element.tariffs.hasOwnProperty("Комфорт")) {
      if (element.tariffs.Комфорт.year.toString() === data) return true;
    }
    if (element.tariffs.hasOwnProperty("Эконом")) {
      if (element.tariffs.Эконом.year.toString() === data) return true;
    }
    if (element.tariffs.hasOwnProperty("Комфорт+")) {
      if (element.tariffs["Комфорт+"].year.toString() === data) return true;
    }
    if (element.tariffs.hasOwnProperty("Минивен")) {
      if (element.tariffs["Минивен"].year.toString() === data) return true;
    }
    if (element.tariffs.hasOwnProperty("Бизнес")) {
      if (element.tariffs["Бизнес"].year.toString() === data) return true;
    }
    if (element.tariffs.hasOwnProperty("Лайт")) {
      if (element.tariffs["Лайт"].year.toString() === data) return true;
    } else return false;
  };
  const filterData = (event) => {
    event.preventDefault();
    if (inputFilterData === "") {
      setCars(cars);
      setIsFiltered(false);
    } else {
      setFilteredCars(
        cars.filter(
          (element) =>
            element.mark
              .toLowerCase()
              .includes(inputFilterData.toLowerCase()) ||
            element.model
              .toLowerCase()
              .includes(inputFilterData.toLowerCase()) ||
            checkYear(element, inputFilterData)
        )
      );
      setIsFiltered(true);
    }
  };
  const clearFilter = () => {
    setInputFilerData("");
    setCars(cars);
    setIsFiltered(false);
  };
  const detailCar = (mark, model, year) => {
    if (year !== undefined)
      setResultData(
        "Вы выбрали " + mark + " " + model + " " + year.year + " года"
      );
    else setResultData("Такой автомобиль отсутствует!");
  };
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Aside />
        <div className="cars_table">
          <Form
            inputFilterData={inputFilterData}
            setInputFilerData={setInputFilerData}
            filterData={filterData}
            clearFilter={clearFilter}
          />
          <Table
            cars={cars}
            tableCars={tableCars}
            filteredCars={filteredCars}
            sortTable={sortTable}
            isSorted={isSorted}
            isFiltered={isFiltered}
            detailCar={detailCar}
          />
          <Result resultData={resultData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
