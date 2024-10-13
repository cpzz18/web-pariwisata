import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/12.jpg?raw=true"
            title="Welcome to Surabaya"
            text="Choose your destination"
            url="/"
            btnClass="show"
            buttonText="Travel Plan"
        />
        <Destination />
        <Trip />
        <Footer />
    </>
  )
}

export default Home;
