import React from 'react';
import './item.css';
const Coin = ({
  key,
  name,
  weightage,
  cointicker,
  basket,
  coin,
  image
}) => {
  return (
   <div className="coin-container">
       <div className="coin-row">
           <div className="coin">
                <img src={image} alt='crypto' />
                <h1>Name<br/>{name}</h1>
           </div>
           <div className="coin-data">
                Ticker<br/>{cointicker}
            </div>
            <div className="coin-data">
                Weightage<br/>{weightage} 
            </div>
            <div className="coin-data">
                Basket<br/>{basket} 
            </div> 
            <div className="coin-data">
                Coin<br/>{coin}
           </div>
       </div>
   </div>
  );
};

export default Coin;