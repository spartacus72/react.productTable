import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;

    products
        .filter(product => product.name.includes(filterText)
            && (!inStockOnly || product.stocked))
        .forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow
                category={product.category}
                key={product.category}
            />);
        }
        rows.push(<ProductRow
            product={product}
            key={product.name}
        />);

        lastCategory = product.category;
    });
        
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default ProductTable;