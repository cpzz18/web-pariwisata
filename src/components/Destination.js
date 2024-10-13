import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Surabaya"
        text="Surabaya is the second largest city in Indonesia and the capital of East Java province. It is known for its rich culture, delicious cuisine, and vibrant atmosphere."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Surabaya"
        text="Surabaya is the second largest city in Indonesia and the capital of East Java province. It is known for its rich culture, delicious cuisine, and vibrant atmosphere."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
