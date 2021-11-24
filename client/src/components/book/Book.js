import React, {Component} from 'react'
import {ReactReader} from 'react-reader'

class Book extends Component {
  render () {
    return (
      <div style={{position: 'relative', height: '100%'}}>
        <h1>Hello</h1>
        <ReactReader
            url={'https://gerhardsletten.github.io/react-reader/files/alice.epub'}
            title={'Alice in wonderland'}
            location={'epubcfi(/6/2[cover]!/6)'}
            locationChanged={(epubcifi) => console.log(epubcifi)}
        />
        </div>
    )
  }
}

export default Book;