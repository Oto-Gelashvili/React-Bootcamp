import './ServiceItem.css';
export default function ServiceItem({
  img,
  category,
  subCategory,
  title,
  desc,
  avatar,
  name,
  tier,
  price,
}) {
  return (
    <div className="service-item">
      <div className="img-container">
        <img src={img} alt={img} />
      </div>
      <div className="text-container">
        <h6>
          {category}/{subCategory}
        </h6>
        <h2>{title}</h2>
        <p className="desc">{desc}</p>
        <div className="info">
          <div className="profile-info">
            <img src={avatar} alt={avatar} />
            <div className="tier-container">
              <p>{name}</p>
              <p>{tier}</p>
            </div>
          </div>
          <h4 className="pricing">{price}</h4>
        </div>
      </div>
    </div>
  );
}
