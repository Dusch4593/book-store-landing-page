import React, { Component } from 'react'

interface Props {
  records: Array<{
    name: string,
    artist: string,
    coverArt?: string,
    releaseDate: string,
    trackList: Array<{
      trackName: string,
      trackGenre: string
    }>
  }>,

  hours: Array<{
    dayOfWeek: string,
    openTime: string,
    closeTime: string
  }>
}

interface State {
  open: boolean
}


class Storefront extends Component<Props, State> {
  // Storefront can switch between different Storesections?
  state : State = {
    open: false
  }


  openOrClosed = () => {
    return(this.state.open ? "Open!" : "Closed.")
  }

  render() {
    return(
      <div>
        <strong>This is the storefront!</strong><br />
        <p>The store is {this.openOrClosed()}</p>
      </div>
    )
  }

}

export default Storefront
