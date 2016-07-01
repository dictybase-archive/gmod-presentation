// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem } from "spectacle"

export default class BioRelational extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={2} textColor="tertiary">
                DSC relational data
            </Heading>
            <List>
                <ListItem> Strain/Plasmid publciations </ListItem>
                <ListItem> Strain/Plasmid gene associations </ListItem>
                <ListItem> Strain and parental strain relationships </ListItem>
                <ListItem> Strain plasmid relationships </ListItem>
            </List>
          </div>
    )
  }
}
