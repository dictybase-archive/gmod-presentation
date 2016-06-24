// Import React
import React from "react";

// Import slides
import Intro from "./Intro";
import DictybaseOverhaul from "./DictybaseOverhaul";
import DatabaseMigration from "./DatabaseMigration";
import Architecture from "./Architecture";
import DictyStockCenter from "./DictyStockCenter";
import StockProperties from "./StockProperties";
import StockInventories from "./StockInventories";
import LegacyDataModel from "./LegacyDataModel";
import ChadoStcokModule from "./ChadoStcokModule";
import DictyBaseStocks from "./DictyBaseStocks";
import GenotypePhenotype from "./GenotypePhenotype";
import Plasmid from "./Plasmid";
import Users from "./Users";
import Authentication from "./Authentication";
import OAuth from "./OAuth";
import OauthProviders from "./OauthProviders";
import Orcid from "./Orcid";
import OauthWorkFlow from "./OauthWorkFlow";
import WebToken from "./WebToken";
import AuthModule from "./AuthModule";
import DscOrderChado from "./DscOrderChado";
import OrderModule from "./OrderModule";
import Content from "./Content";

// Import Spectacle Core tags
import {Deck, Slide, Spectacle} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#2980b9"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Intro />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <DictybaseOverhaul />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <DatabaseMigration />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Architecture />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <DictyStockCenter />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <StockProperties />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <StockInventories />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <LegacyDataModel />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="primary">
            <ChadoStcokModule />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <DictyBaseStocks />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <GenotypePhenotype />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Plasmid />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Users />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Authentication />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <OAuth />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <OauthProviders />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Orcid />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <OauthWorkFlow />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <WebToken />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <AuthModule />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <DscOrderChado />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <OrderModule />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Content />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}