import React, { useContext } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Context as ItemContext } from "../context/ItemsContext";
import { v1 as uuid } from "uuid";

const ShoppingList = () => {
  const {
    state: { items },
    addItem,
    deleteItem,
    getItems,
  } = useContext(ItemContext);

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
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
