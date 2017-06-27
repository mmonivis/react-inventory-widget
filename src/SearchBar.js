import React, { Component } from 'react';

// SearchBar (blue): receives all user input
function searchBar(props){
	return(
		<form className="search-bar">
			<input type="text" name="search" placeholder="Search..." />
			<div>
				<input type="checkbox" name="filter" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}