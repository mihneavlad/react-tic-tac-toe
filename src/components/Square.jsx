import React from 'react';
//
// // Varianta 3
// // const Square = ({value}) => ( <button className="square" >{value}</button>)
//
// // {/* <button onClick={() => console.log('clicked')}> */}
//
//
// class Square extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//
//   render() {
//     // Varianta 1
//
//     // return (
//     //   <button className="square" >
//     //     {this.props.value}
//     //   </button>
//     // );
//
//
//     // Varianta 2
//
//     // const {value} = this.props;
//
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
//
//
// }
//


function Square(props) {
  return(
    <button className="square" onClick={props.onClick}>
      {props.square}
    </button>
  )
}


export default Square;
