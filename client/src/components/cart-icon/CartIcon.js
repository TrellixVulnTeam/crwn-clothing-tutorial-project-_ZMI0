import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
