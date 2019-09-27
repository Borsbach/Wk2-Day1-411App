import React, { Component} from 'react'

// const Details = (props) => {
//   return (
//     <div>
//       <ul>
//         <li>{props.details[0]}</li>
//         <li>{props.details[1]}</li>
//         <li>{props.details[2]}</li>
//       </ul>
//     </div>    
//   )
// }

class Details extends Component {
  state = {
    show: true
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <ul>
        <li>{this.props.details[0]}</li>
        <li>{this.props.details[1]}</li>
        <li>{this.props.details[2]}</li>
      </ul>
    </div>    
    )
  }
}

export default Details