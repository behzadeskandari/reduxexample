import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getProducts} from './actions';

const Products = ({getProducts,loading,products}) => {
    React.useEffect(() => {
        getProducts();
    },[getProducts])
  if (loading) {
      return <div className='section-title'>Loading...</div>
  }
  return (
    <div className='section'>
        <h2 className="section-title">OUR Products</h2>
        <ul className="products">
            {products.map((item) => {
                return <li key={item.id} className="product">
                    <img src={item.image.url}/>
                    <h4 className="title"> {item.title}</h4>
                </li>
            })}
        </ul>
    </div>
  )
}

Products.propTypes = {
    loading:PropTypes.bool.isRequired,
    products:PropTypes.arrayOf(PropTypes.object).isRequired,
    getProducts: PropTypes.func.isRequired
}

const mapStateToProps =({productState: {products,loading}}) => {
    return { 
        products,
        loading
    }
}

function mapDispatchToProps(){
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)