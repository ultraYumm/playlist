import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

export default function Play(props) {
  //console.log(props)
  console.log(props['Last Updated'])

  const updated = props['Last Updated']
  return (
    <div className="book">
      <h2>{ props.title }</h2>
        <div className="book_author">Name { props.App }</div>
        <div className="book_publisher">
            Category: { props.Category }</div>
        <div className="book_details">
            Rating {props.Rating}
        </div>
        <div className="book_description">Reviews: { props.Reviews } </div>
        <div className="book_description">Size: { props.Size } </div>
        <div className="book_description">No of Installs: { props.Installs } </div>
        <div className="book_description">Type: { props.Type } </div>
        <div className="book_description">Price: ${ props.Price } </div>
        <div className="book_description">Genre: { props.Genres } </div>
        
       <div>
            Updated on: {moment(updated).format('DD MMM YYYY')}
              </div>
       <div className="book_description">Current Version { props['Current Ver']} </div>
       <div className="book_description">Android Version { props['Android Ver']} </div>
       
    </div>
  );
}