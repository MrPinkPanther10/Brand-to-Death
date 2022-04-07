import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import CollectionLink from "../assets/Images/Burn.jpg"
import '../product-style.css';

function Equinox () {

  return (
    <body>
    <div className="main-showcase">
    <div className="container-product">
        <Link to="/BlueAmber" className="card-product">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Product-1.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Equinox Collection</h2>
                <h2>Blue Amber</h2>
                <a href="https://checkout.stripe.com/pay/cs_test_a16VTYaAl1vSnirPY6tDMzKKjioHVs1cu1nfh0pQLqO6R56WxMYMFbrhsP#fidkdWxOYHwnPyd1blpxYHZxWjA0TmxKTW1MfWE9Zn1vTDNiVFFOcnczUGZTbVNdNjVUSnZkcHNxQ3w0UEdJMXU3azB3aV1hS01CamExRnw8ZkBWb3xoZkxPbzNxTF1zcF08YHRCUDRBdWZBNTV8YlFyaTBLPCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVo0MW5gXDIzREYyc3AxQ3xmSFEneCUl">Buy Now</a>
            </div>
        </Link>
        
        <Link to="/GoldenSapphire" className="card-product">
            <div className="imgBx">
                <img src={require(`../assets/Images/products/Golden-Sapphire-3.png`)}/>
            </div>
            <div className="contentBx">
                <h2>Equinox Collection</h2>
                <h2>Golden Sapphire</h2>
                <a href="https://checkout.stripe.com/pay/cs_test_a1pRCmQmPKtWuwDgXUi7pVNTzWUcVfoTSheTgnDKZE7F99dcadtPhAuD9q#fidkdWxOYHwnPyd1blpxYHZxWjA0TmxKTW1MfWE9Zn1vTDNiVFFOcnczUGZTbVNdNjVUSnZkcHNxQ3w0UEdJMXU3azB3aV1hS01CamExRnw8ZkBWb3xoZkxPbzNxTF1zcF08YHRCUDRBdWZBNTV8YlFyaTBLPCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVpmSzc9f083bmg0MjM1dWxmSFQneCUl">Buy Now</a>
            </div>
        </Link>
        </div>
</div>


</body>
  );
}

export default Equinox ;