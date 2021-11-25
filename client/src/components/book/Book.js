import React, {Component} from 'react'
// import {ReactReader} from 'react-reader'
import BookComponent from './BookComponent'

class Book extends Component {
    render() {
        return (
            <BookComponent />
        )
    }
//   render () {
//     return (
//       <div style={{position: 'relative', height: '100%'}}>
//         <ReactReader
//             url={'https://gerhardsletten.github.io/react-reader/files/alice.epub'}
//             title={'Alice in wonderland'}
//             location={'epubcfi(/6/2[cover]!/6)'}
//             locationChanged={(epubcifi) => console.log(epubcifi)}
//         />
//         </div>
//     )
//   }
}

export default Book;