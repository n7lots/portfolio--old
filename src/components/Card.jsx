export default function Card({ imageCover, cardTitle, description }) {
  return (
    <div className="card">
      <div className="card-container">
        {imageCover}
      </div>
      <div className="card-content">
        <h3>{cardTitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
