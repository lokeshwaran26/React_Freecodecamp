import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({name,image,price}) => {
  const url = image && image.url
  return (
  <article className='product'>
    <h4>{name || "Default Name"}</h4>
    <img src={url || defaultImage} alt="Image" />
    <p>{price || 3.99}</p>
  </article>
  )
};

Product.propTypes ={
  image : PropTypes.object.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired
}

// Product.defaultProps = {
//   name : 'Default Name',
//   image : defaultImage,
//   price : 3.99
// }

export default Product;
