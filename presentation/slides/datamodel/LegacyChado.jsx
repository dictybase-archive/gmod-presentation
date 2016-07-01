// Import React
import React from "react"


// Import Spectacle Core tags
import { Heading,
    ListItem, List,
    Appear
}
    from "spectacle"

export default class LegacyChado extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
              Legacy data model
            </Heading>
                <Appear>
                    <List>
                        <ListItem> Non-canonical, incorrect chado model </ListItem>
                        <ListItem> Addition of non-standard columns </ListItem>
                        <ListItem> Removal of standard columns </ListItem>
                        <ListItem> Removal of standard constraints </ListItem>
                        <ListItem> Sparse use of typed ontology </ListItem>
                    </List>
                </Appear>
          </div>
    )
  }
}
