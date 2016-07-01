// Import React
import React from "react"
// Import Spectacle Core tags
import { Heading, List, ListItem } from "spectacle"
import SoftwareTool from "./SoftwareTool"

export default class FrontMiddle extends React.Component {
  render() {
      return (
          <div>
            <Heading size={3} lineHeight={1} textColor="tertiary">
                  Dictybase overhaul
            </Heading>
            <List>
                <ListItem>
                    Software Retooling
                    <SoftwareTool/>
                </ListItem>
            </List>
          </div>
        )
  }
}
