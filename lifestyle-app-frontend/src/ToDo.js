import React, { Component } from 'react';
import moment from 'moment'
import sprout from './images/sprout.png'
import pink_flower from './images/pink_flower.png'
import dead from './images/dead.png'

export class SimpleToDo extends Component {
  constructor(props) {
    super(props)
    this.state = { details: false }
  }

  toggleDetails() {
    this.setState({ details: !this.state.details })
  }

  render() {
    const { title, body, url, complete } = this.props.data
    const details = this.state.details

    return (
      <div onClick={() => this.toggleDetails() } className='grid-item'>
      {!complete && <img className="images" src={sprout} alt='sprout'/>}
      {complete && <img className="images" src={pink_flower} alt='pink_flower'/>}
      <h1>{title}</h1>
      {details &&
        <>
        <h2>{body}</h2>
        <button className='delete-button' onClick={() => this.props.deleteClicked(url)}>Delete</button>
        </>
      }
      {!complete && details && <button onClick={() => this.props.completeClicked(url)}>Complete</button>}
      </div>
    )
  }
}

export class TimedToDo extends Component {
  constructor(props) {
    super(props)
    this.state = { details: false }
  }

  toggleDetails() {
    this.setState({ details: !this.state.details })
  }

  isLate(date) {
    return new Date(date) < new Date() && date !== null
  }

  render() {
    const {title, body, url, complete, start_time, end_time} = this.props.data
    const details = this.state.details
    const isLate = this.isLate(end_time)

    return(
      <div className='grid-item' onClick={() => this.toggleDetails()}>
      {isLate && <img className="images" src={dead} alt='dead'/>}
      {!isLate && !complete && <img className="images" src={sprout} alt='sprout'/>}
      {!isLate && complete && <img className="images" src={pink_flower} alt='pink_flower'/> }
      <h1>{title}</h1>
      {details &&
        <>
        <h2>{body}</h2>
        <p>{moment(start_time).format("MMM Do YY @ h:mm a")}</p>
        <p>{moment(end_time).format("MMM Do YY @ h:mm a")}</p>
        <button onClick={() => this.props.deleteClicked(url)}>Delete</button>
        </>
      }
      {details && !complete && !isLate &&
        <button onClick={() => this.props.completeClicked(url)}>Complete</button>}
      </div>
    )
  }
}
