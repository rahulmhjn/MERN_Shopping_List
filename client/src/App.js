import React, { useContext } from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";
import { Provider as ItemProvider } from "./context/ItemsContext";
import { Context as AuthContext } from "./context/AuthContext";
import { Provider as ErrorProvider } from "./context/ErrorContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const { state } = useContext(AuthContext);
  console.log(state);
  return (
    <ErrorProvider>
      <ItemProvider>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </ItemProvider>
    </ErrorProvider>
  );
}

export default App;
