import { ProductList } from "./components/ProductList";
import { ProductListMockData } from "./shared/mocks/mockProductList";

function App() {
  return (
    <div className="App">
      <h1>Checkout</h1>
      <ProductList ProductList={ProductListMockData} />
    </div>
  );
}

export default App;
