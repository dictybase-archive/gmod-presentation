// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem } from "spectacle"

export default class DatabaseMigration extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
                Data models
            </Heading>
            <List>
                <ListItem> Genomes and annotations </ListItem>
                <ListItem> Strains/Plasmids and Genotypes/Phenotypes </ListItem>
                <ListItem> Stock orders </ListItem>
                <ListItem> Literature annotations </ListItem>
                <ListItem> GO annotations </ListItem>
            </List>
          </div>
    )
  }
}
