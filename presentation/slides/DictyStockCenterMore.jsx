// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem, Appear } from "spectacle"

export default class DictyStockCenterMore extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
              Dicty stock center(DSC)
            </Heading>
            <List>
                <Appear><ListItem> Funded by an independent NIH R01 grant </ListItem></Appear>
                <Appear><ListItem> Refunded on winter of 2014 </ListItem></Appear>
                <Appear><ListItem> Ships stocks worldwide with minimal charges(Aug 2015) </ListItem></Appear>
                <Appear><ListItem> Perodically requests for published stocks to the community </ListItem></Appear>
            </List>
          </div>
    )
  }
}
