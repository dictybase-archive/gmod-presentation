// Import React
import React from "react"

// Import Spectacle Core tags
import { Heading, List, ListItem } from "spectacle"

export default class NonBioNewFund extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
                DSC new data
            </Heading>
            <List>
                <ListItem> Tracking of orders </ListItem>
                <ListItem> User authentication and authorization </ListItem>
                <ListItem> User centric DSC(MyDSC) </ListItem>
                <ListItem> Community feedbacks and comments </ListItem>
            </List>
          </div>
    )
  }
}
