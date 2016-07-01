// Import React
import React from "react"

// Import custom slide components
import {
  Intro,
  OverhaulBackend,
  OverhaulFrontMiddle,
  DatabaseMigration,
  LegacySGD,
  LegacyChado,
  DictyStockCenter,
  DictyStockCenterMore,
  DscBioData,
  DscBioRelational,
  DscNonBio,
  DscNewFund
} from "./slides"


// Import Spectacle Core tags
import {Deck, Slide, Spectacle} from "spectacle"

// Import image preloader util
//import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")


const theme = createTheme({
    primary: "#2980b9"
})

export default class Presentation extends React.Component {
  render() {
      return (
          <Spectacle theme={theme}>
            <Deck transition={["zoom", "slide"]} transitionDuration={500}>
              <Slide transition={["zoom"]} bgColor="primary">
                <Intro />
              </Slide>
              <Slide transition={["slide", "spin"]} bgColor="primary" notes="notes">
                <OverhaulBackend />
              </Slide>
              <Slide transition={["slide", "spin"]} bgColor="primary" notes="notes">
                <OverhaulFrontMiddle />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DatabaseMigration />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <LegacySGD />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <LegacyChado />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DictyStockCenter />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DictyStockCenterMore />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DscBioData />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DscBioRelational />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DscNonBio />
              </Slide>
              <Slide transition={["zoom", "fade"]} bgColor="primary" notes="notes">
                <DscNewFund />
              </Slide>
            </Deck>
          </Spectacle>
    )
  }
}
