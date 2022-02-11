import './App.css';
import Product from './Components/Product';
import ProductFonctionnel from './Components/ProductFonctionnel';
import products from "./Components/product.json";
import styled from 'styled-components';


function App() {
  return (
    <AppFrame>
      {products.map((p, index) => 
       { return <Product prod={p} key={index}> </Product>}
      )}  
    </AppFrame>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;


export default App;
