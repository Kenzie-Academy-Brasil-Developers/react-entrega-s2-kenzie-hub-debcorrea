import { Card } from "./style";

const TechCard = ({ tech }) => {
  return (
    <Card>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
    </Card>
  );
};

export default TechCard;
