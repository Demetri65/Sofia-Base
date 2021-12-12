import React, { useState } from "react"
import { ReactReader } from "react-reader"
import * as Ebook from "./BookDirectory.js"

const BookComponent = (bookTitle) => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. 
    // It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
  
  // I am sorry. But this must be done...
  // No it doesnt... - tn
  console.log(bookTitle.bookTitle)
  if(bookTitle.bookTitle==='MarcusAurelius') {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.MarcusAurelius}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==='Voltaire') {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.Voltaire}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="AristotleEthics") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.AristotleEthics}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="AristotleCategories") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.AristotleCategories}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="AristotlePhysics") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.AristotlePhysics}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="AristotlePoetics") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.AristotlePoetics}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="AristotlePolitics") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.AristotlePolitics}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="DarwinOrigin") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.DarwinOrigin}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="EinsteinRelativity") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.EinsteinRelativity}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="FreudPsycho") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.FreudPsycho}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="PlatoApology") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.PlatoApology}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="PlatoRepublic") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.PlatoRepublic}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="PlatoSymposium") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.PlatoSymposium}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="HomerIliad") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.HomerIliad}
        />
      </div>
    )
  }
  else if (bookTitle.bookTitle==="HomerOdyssey") {
    return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url={Ebook.HomerOdyssey}
        />
      </div>
    )
  }

  
}

export default BookComponent