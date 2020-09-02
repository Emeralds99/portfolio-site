import React from "react";

import Card from "./Card";

import teecommerce from "../assets/images/teecommerce.png";
import orderbook from "../assets/images/orderbook.png";
import filmweb from "../assets/images/filmweb.png";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "TeeCommerce",
          subtitle: "Easily enter data into a custom database",
          imgSrc: teecommerce,
          link: "https://github.com/Emeralds99/react-auth0",
          selected: false,
        },
        {
          id: 1,
          title: "OrderBook",
          subtitle: "JS logic for efficiently trading BitCoin",
          imgSrc: orderbook,
          link: "https://github.com/Emeralds99/order-book",
          selected: false,
        },
        {
          id: 2,
          title: "FilmWeb",
          subtitle: "Find your new favorite movie!",
          imgSrc: filmweb,
          link: "#",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
