// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem } from "spectacle"

export default class NonBiological extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={2} textColor="tertiary">
                DSC non-biological data
            </Heading>
            <List>
                <ListItem> Strain and plasmid inventories</ListItem>
                <ListItem> Stock center orders </ListItem>
                <ListItem> Stock center users </ListItem>
            </List>
          </div>
    )
  }
}
