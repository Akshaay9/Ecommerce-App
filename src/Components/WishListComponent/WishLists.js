import React from "react";
import { useWishListContextProvider } from "../../Contexts/WishListContext/WishListContext";

function WishLists() {
  const {
    state: { wishListItems },
  } = useWishListContextProvider();
  return (
    <div>
      <div className="wishList-heading">Your WishList</div>
      <div className="wishList-components">
        {wishListItems.map((ele) => (
          <div className="wishlist-component-container">
            <div className="wishlist-component-container-left">
            <div className="cart-component-left-img">
              <img src={ele.images[0].img1} alt="" />
                    </div>
                <div className="wishlist-component-container-left-desc">
                <h2>{ele.name}</h2>
              <h4>{ele.price}.00₹</h4>
                        <p>{ele.desc}</p>
                        </div>
                       
            </div>
                <div className="wishlist-component-container-right">
                <i class="fas fa-trash"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishLists;
