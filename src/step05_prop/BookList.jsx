import { Container, List, ListItem } from "@mui/material";
import React, {Component} from "react";
import BookListItem from "./BookListItem";

class BookList extends React.Component{
    render(){
        //const books = this.props.books;
        // 구조 분해 할당
        const {books} = this.props;
        const bookItems = books.map((k)=>{
            return(
                <ListItem>
                    <BookListItem book = {k} />
                </ListItem>
            )
        })
        return(
            <Container maxWidth='sm'>
                <List>
                    {bookItems}
                </List>
            </Container>
        )
        /* return(
            <List>
                <ListItem>Item01</ListItem>
                <ListItem>Item02</ListItem>
                <ListItem>Item03</ListItem>
            </List>
        ) */
    }
}
export default BookList;