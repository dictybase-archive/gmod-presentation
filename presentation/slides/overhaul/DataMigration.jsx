// Import React
import React from "react"

// Import Spectacle Core tags
import { List, ListItem } from "spectacle"

export default class DataMigration extends React.Component {
    render() {
        return (
            <List padding="5px 5px 5px 35px" textColor="#bdc3c7">
                <ListItem>All genomes in one database </ListItem>
                <ListItem>Retire legacy/inherited SGD schema</ListItem>
                <ListItem>Clean up data</ListItem>
                <ListItem>Bring data under a standard schema and data models</ListItem>
                <ListItem>Correct data models</ListItem>
            </List>
        )
    }
}
