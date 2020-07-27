import React, { useContext } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Context as ItemContext } from "../context/ItemsContext";
import { v1 as uuid } from "uuid";

const ShoppingList = () => {
  const { state, addItem, deleteItem, getItems } = useContext(ItemContext);

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            // setItems([...items, { id: uuid(), name }]);
            const newItem = { id: uuid(), name: name };
            addItem(newItem);
          }
        }}
      >
        Add Item
      </Button>

      <ListGroup>
        <TransitionGroup className="shopping-list">
          {state.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    // setItems(items.filter((item) => item.id !== id));
                    deleteItem(id);
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
