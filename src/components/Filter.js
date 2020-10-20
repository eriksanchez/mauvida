import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order {" "}
          <select value={this.props.size} onChange={this.props.sortProducts}>
          <option value="latest">Latest</option>  
          <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter {" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
      </div>
    );
  }
}
