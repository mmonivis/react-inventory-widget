import React, { Component } from 'react';
import SearchBar from 'searchBar';

// FilterableProductTable (orange): contains the entirety of the example
function filterableProductTable(){

	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable products={props.products} />
		</div>
	)
}