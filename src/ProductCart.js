import { CalculateDiscountPercentage } from "./CalculateDiscountPercentage";
export const ProductCard = ({ product }) => {
  const discountPercentage = CalculateDiscountPercentage(
    product.price,
    product.compareAtPrice
  );

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <span className="badge">{product.badge}</span>
      <h3>{product.title}</h3>
      <p>{product.vendor}</p>
      <p>Price: ${product.price}</p>
      {product.compareAtPrice && (
        <p>Compare at Price: ${product.compareAtPrice}</p>
      )}
      {discountPercentage > 0 && <p>Discount: {discountPercentage}% Off</p>}
      <button>Add to Cart</button>
    </div>
  );
};
