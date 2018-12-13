import React from "react";

class Appetizer extends React.Component {
  render() {
    const { name, desc, price } = { ...this.props.details };
    return (
      <li className="menu-appetizer">
        <h3>{name}</h3>
        <h2>{desc}</h2>
        <h4>{price}</h4>
      </li>
    );
  }
}

export default Appetizer;
