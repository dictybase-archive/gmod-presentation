// Import React
import React from "react"
// Import Spectacle Core tags
import { Heading, List, ListItem } from "spectacle"
import DataMigration from "./DataMigration"

export default class Backend extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
                  Dictybase overhaul
            </Heading>
            <List>
                <ListItem>
                    Data migration from Oracle to Postgresql
                    <DataMigration />
                </ListItem>
            </List>
          </div>
        )
  }
}
