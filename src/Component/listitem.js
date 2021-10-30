import React from "react";
import Items from "./item";
import Data from "./data.json";
const ListItem=()=>{
    return(
    <div>
    {Data.map(coin => {
        return (
          <Items
            key={coin.coin_id}
            name={coin.coin_name}
            weightage={coin.weightage}
            cointicker={coin.coin_ticker}
            basket={coin.basket}
            coin={coin.coin}
            image={coin.coin_logo_url}
          />
        );
      })}
    </div>
    );
};

export default ListItem;