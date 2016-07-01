// Import React
import React from "react"

// Import Spectacle Core tags
import { List, ListItem, S } from "spectacle"

export default class SoftwareTool extends React.Component {
    render() {
        return (
            <List padding="5px 5px 5px 35px" textColor="#bdc3c7">
                <ListItem>
                    Data access layer
                    <S type="bold" textColor="#E4F1FE"> [Middleware]</S>
                </ListItem>
                <ListItem>
                    Web Application
                    <S type="bold" textColor="#E4F1FE"> [Frontend] </S>
                </ListItem>
                <ListItem>Exchangable data(JSON)</ListItem>
                <ListItem>Bulk data loader</ListItem>
            </List>
        )
    }
}
