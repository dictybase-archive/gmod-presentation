// Import React
import React from "react"
import markdown from "../../../assets/markdown.png"


// Import Spectacle Core tags
import { Heading,
    Image, ListItem, List,
    Appear
}
    from "spectacle"

export default class LegacySGD extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
              Legacy data model
            </Heading>
                <Appear>
                        <Image src={markdown} height="200" width="800" margin="20px 5px 5px 5px"/>
                </Appear>
                <Appear>
                    <List>
                        <ListItem> Denormalized, single table with multiple columns </ListItem>
                        <ListItem> Lack of primary key or any database index </ListItem>
                        <ListItem> Hardly any relational tables or constraint </ListItem>
                        <ListItem> Unclean data </ListItem>
                    </List>
                </Appear>
          </div>
    )
  }
}
