import React from 'react';

// Varianta 3
const Square = ({value}) => ( <button className="square" >{value}</button>)

// class Square extends Component {

  // render() {
  //   // Varianta 1
  //
  //   // return (
  //   //   <button className="square" >
  //   //     {this.props.value}
  //   //   </button>
  //   // );
  //
  //
  //   // Varianta 2
  //
  //   const {value} = this.props;
  //
  //   return (
  //     <button className="square" >
  //       {value}
  //     </button>
  //   );
//   // }
// }

export default Square;
