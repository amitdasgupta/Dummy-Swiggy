import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popular_brands: [],
      offers_near_you: [],
      express_delivery: [],
      gourment: [],
      only_on_swiggy: [],
    };
  }
  transformData(data) {
    for (let resturant of data) {
      const { category, restaurantList } = resturant;
      switch (category) {
        case "popular brands":
          this.setState({ popular_brands: restaurantList });
          break;
        case "offers near you":
          this.setState({ offers_near_you: restaurantList });
          break;
        case "Express delivery":
          this.setState({ express_delivery: restaurantList });
          break;
        case "Gourmet":
          this.setState({ gourment: restaurantList });
          break;
        default:
      }
    }
  }
  getSwiggyData() {
    const swiggyData = [];
    const {
      popular_brands,
      offers_near_you,
      express_delivery,
      gourment,
    } = this.state;
    for (let item of popular_brands) {
      if (item.isExlusive) swiggyData.push(item);
    }
    for (let item of offers_near_you) {
      if (item.isExlusive) swiggyData.push(item);
    }
    for (let item of express_delivery) {
      if (item.isExlusive) swiggyData.push(item);
    }
    for (let item of gourment) {
      if (item.isExlusive === "true") swiggyData.push(item);
    }
    this.setState({ only_on_swiggy: swiggyData });
  }
  async fetchData() {
    const fetchedData = await axios.get("http://localhost:3010/mydata/");
    const { data } = fetchedData;
    this.transformData(data);
    this.getSwiggyData();
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    console.log(this.state);
    const {
      popular_brands,
      offers_near_you,
      only_on_swiggy,
      express_delivery,
      gourment,
    } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div>
          <Section
            title="Popular Brands"
            id="section1"
            dishes={popular_brands}
          />
          <Section
            title="Offers Near You"
            id="section2"
            dishes={offers_near_you}
          />
          <Section
            title="Express Delivery"
            id="section3"
            dishes={only_on_swiggy}
          />
          <Section title="Gourment" id="section4" dishes={express_delivery} />
          <Section title="Only on swiggy" id="section5" dishes={gourment} />
        </div>
      </div>
    );
  }
}

export default App;
