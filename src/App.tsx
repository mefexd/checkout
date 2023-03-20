import { Basket } from "./components/Basket";
import { ProductListMockData } from "./shared/mocks/mockProductList";

function App() {
  return (
    <div className="App">
      <h1>Checkout</h1>
      <Basket BasketItems={ProductListMockData} />
    </div>
  );
}

export default App;
