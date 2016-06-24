// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Text } from "spectacle";

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Content implementation
        </Heading>
        <Text bold caps textColor="#bdc3c7" margin="50px 0px 0px">Text</Text>
      </div>
    );
  }
}
