import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    onFilterTextChange = (filterText) => {
        this.setState({
            filterText
        });
    };

    onInStockChange = (inStockOnly) => {
        this.setState({
            inStockOnly
        });
    }

    render() {
        const { filterText, inStockOnly } = this.state;
        const { products } = this.props;

        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onFilterTextChange={this.onFilterTextChange}
                    onInStockChange={this.onInStockChange}
                />
                <ProductTable
                    products={products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;