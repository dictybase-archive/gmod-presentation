// Import React
import React from "react";

// Import custom slide components
import {
  Intro,
  DictybaseOverhaul,
  DatabaseMigration,
  Architecture,
  DictyStockCenter,
  StockProperties,
  StockInventories,
  LegacyDataModel,
  ChadoStcokModule,
  DictyBaseStocks,
  GenotypePhenotype,
  Plasmid,
  Users,
  Authentication,
  OAuth,
  OauthProviders,
  Orcid,
  OauthWorkFlow,
  WebToken,
  AuthModule,
  DscOrderChado,
  OrderModule,
  Content
} from "./slides";

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
          <Slide transition={["slide", "spin"]} bgColor="primary" notes="notes">
            <DictybaseOverhaul />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
            <DatabaseMigration />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary" >
            <Architecture />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <DictyStockCenter />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <StockProperties />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="primary">
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
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <GenotypePhenotype />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="primary">
            <Plasmid />
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Users />
          </Slide>
          <Slide transition={["slide", "zoom"]} bgColor="primary">
            <Authentication />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary">
            <OAuth />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <OauthProviders />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Orcid />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="primary">
            <OauthWorkFlow />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <WebToken />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <AuthModule />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="primary">
            <DscOrderChado />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <OrderModule />
          </Slide>
          <Slide transition={["spin", "fade"]} bgColor="primary">
            <Content />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
