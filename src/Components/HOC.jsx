import React from "react";
import "./ProductList.css";

const products = [
  { productName: "Jeevesh", price: 100 },
  { productName: "Ajay", price: 9999 },
  { productName: "vaishno", price: 8888 },
  { productName: "Sachin", price: 7777 },
  { productName: "lalit", price: 4444 },
];
const withSearch = (WrappedComponent) => {
  class SearchFuctionality extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
      };
    }
    updateSearch = (e) => {
      this.setState({ search: e.target.value });
    };
    filterProducts = () => {
      return products.filter((product) =>
        product.productName.toLowerCase().includes(this.state.search)
      );
    };
    render() {
      const updatedProducts = this.filterProducts();
      return (
        <div className="search">
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts}></WrappedComponent>
        </div>
      );
    }
  }
  return SearchFuctionality;
};
export default withSearch;
