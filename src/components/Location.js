import Map from "../utils/googleMaps"

const Location = () => {
  return (
    <>
      <div id="detailsSection">
        <p id="locationText">Select a pre-filled date location or suggest another date location.</p>
      </div>
      <Map />
      {/* <div id="searchSection">
        <h1 id="searchTitle">Search Location</h1>
        <input type="text"></input>
      </div> */}
    </>
  )
}

export default Location