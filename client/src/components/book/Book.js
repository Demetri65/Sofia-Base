import React, { Component } from "react";
import { ReactReader } from "react-reader"

class Book extends Component {
    render() {
        return (
            <div style={{ }}>
                <ReactReader
                    url="http://localhost:3000/Candied-Voltaire.epub"
                    epubOptions={{
                        flow: "scrolled",
                        manager: "continuous"
                    }}
                />
            </div>
        )
    };
}


export default Book;