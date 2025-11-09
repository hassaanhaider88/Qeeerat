import { MdVerified } from "react-icons/md";
import "./PremiumCard.css";
import { hanldeUserClickToPremium } from "../Services/MoreOptions";
const PremiumCards = ({ cardData }) => {
  const handleClickToPremium = () => {
   var IsConfrim = confirm("Are you sure you want to proceed to Premium Purchase?");
    if (IsConfrim){
     const result= hanldeUserClickToPremium();
     console.log(result)
    }
  };
  return (
    <div
      onClick={cardData.isButton ? handleClickToPremium : ""}
      className="card"
    >
      <div className="pricing-block-content">
        <p className="pricing-plan">{cardData.plan}</p>
        <div
          className="price-value"
          data-currency="$ USD"
          data-currency-simple="USD"
        >
          <p className="price-number">
            $<span className="price-integer">{cardData.price}</span>
          </p>
          <div id="priceDiscountCent">/mo</div>
        </div>
        <div className="pricing-note">{cardData.note}</div>
        <ul className="check-list" role="list">
          {cardData.features.map((feature, index) => (
            <li key={index} className="check-list-item text-nowrap">
              <MdVerified />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PremiumCards;
