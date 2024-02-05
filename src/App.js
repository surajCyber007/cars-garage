import "./App.css";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarsList from "./components/CarsList";
import CarsValue from "./components/CarsValue";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-5 shadow-md py-4 text-blue-500">
        MY CAR LIST
      </h1>
      <CarForm />
      <div className="flex justify-around">
        <CarSearch />
        <CarsValue />
      </div>
      <CarsList />
    </div>
  );
}

export default App;
