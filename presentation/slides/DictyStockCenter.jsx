// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem, Appear } from "spectacle"

export default class DictyStockCenter extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
              Dicty stock center(DSC)
            </Heading>
            <List>
                <Appear><ListItem> Fall of 2002 at Columbia university, NY </ListItem></Appear>
                <Appear><ListItem> Relocated to NU, Chicago in April 2009 </ListItem></Appear>
                <Appear><ListItem> ~2000 strains </ListItem></Appear>
                <Appear><ListItem> ~800 plasmids </ListItem></Appear>
            </List>
          </div>
    )
  }
}
