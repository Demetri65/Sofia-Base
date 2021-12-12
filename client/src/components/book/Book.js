import React, {Component} from 'react'
import BookComponent from './BookComponent'


class Book extends Component {
    //for each book in ./books append to a list
    render() {
        return (
            //for each book in list 
            <BookComponent bookTitle="MarcusAurelius"/>
        )
    }
}

export default Book;