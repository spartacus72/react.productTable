import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({ products }) => <div>
    <SearchBar />
    <ProductTable products={products} />
</div>

export default FilterableProductTable;