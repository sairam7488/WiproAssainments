import logo from './logo.svg';
import './App.css';
import GroceryList from "./Jsfiles/GroceryList";
import Car from "./Jsfiles/Car"; 
import Phone from './Jsfiles/Phone';
import SweetsList from './Jsfiles/SweetsList';
import Electronics from './Jsfiles/Electronics';
import CanteenMenu from './Jsfiles/CanteenMenu';
import JuiceList from './Jsfiles/JuiceList';
import Restaurant from './Jsfiles/Restaurant';
import TempleList from './Jsfiles/TempleList';
import TailorShop from './Jsfiles/TailorShop';
import Fruits from './jsfiles2/Fruits';
import TelevisionManager from './jsfiles2/Television';
import MarriageForm from './jsfiles2/MarriageForm';
import AccessoriesForm from './jsfiles2/AccessoriesForm';
import BakingForm from './jsfiles2/BakingForm';
import FlightBookingForm from './jsfiles2/FlightBookingForm';
import MovieForm from './jsfiles2/MovieForm';

function App() {
  const groceries = ["Rice", "Wheat", "Sugar", "Milk", "Oil"];

  return (
    <div style={{ padding: "20px" }}>
      {/* Lab 1 Output */}
      <h1>React Lab - Grocery List</h1>
      <GroceryList items={groceries} />

      <hr />

      {/* Lab 2 Output */}
      <h1>React Lab - Car Class Component</h1>
      <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
      <Car brand="Hyundai" model="i20" color="Blue" year="2021" />
      <Car brand="Tesla" model="Model S" color="White" year="2023" />

      {/* Lab 3 */}
      <h1>React Lab - Phone Functional Component with useState</h1>
      <Phone />

      {/* Lab 4 */}
      <h1>React Lab - Sweets List</h1>
      <SweetsList />

      {/* Lab 5 */}
      <h1>React Lab - Electronics with multiple useState</h1>
      <Electronics />

      {/* Lab 6 */}
      <h1>React Lab - Canteen Menu (Parent + Child)</h1>
      <CanteenMenu />

      {/* Lab 7 */}
      <h1>React Lab - Juice List (with Table)</h1>
      <JuiceList />

      {/* Lab 8 */}
      <h1>React Lab - Restaurant Menu (Class Components)</h1>
      <Restaurant />

      {/* Lab 9 */}
      <h1>React Lab - Temple List with Nested map()</h1>
      <TempleList />

       {/* Lab 10 */}
      <h1 className="text-center mt-4">React Lab - Tailoring Shop (Bootstrap)</h1>
      <TailorShop />

      {/* Lab 11 */}
      <h1>React Lab - Fruits App</h1>
      <Fruits />

      <h1>React Lab - Television Manager</h1>
      <TelevisionManager />
       
       <h1>Marrage From</h1>
       <MarriageForm />

       <h1>AccessoriesForm</h1>
       <AccessoriesForm />

       <h1>BakingForm</h1>
       <BakingForm />

       <h1>FlightBookingForm</h1>
       <FlightBookingForm />

       <h1>MovieForm</h1>
       <MovieForm />
 

    </div>
  );
}

export default App;