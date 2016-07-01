// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem, Layout, Fill, Markdown } from "spectacle"

export default class Biological extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={2} textColor="tertiary">
                DSC biological data
            </Heading>
            <List>
                <ListItem> Strains and plasmids, their characteristics </ListItem>
                <ListItem> Phenotypes and genotypes </ListItem>
                <ListItem> Related ontologies </ListItem>
                <ListItem> Plasmid sequences and images </ListItem>
            </List>
          </div>
    )
  }
}
