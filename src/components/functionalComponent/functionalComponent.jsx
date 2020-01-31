// import React, { Component } from "react";
// class FunctionalComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return <div>Functional Component</div>;
//   }
// }

// export default FunctionalComponent;

import React from "react";

// export default function FunctionalComponent() {
//   return (
//     <div>
//       <h1>FunctionalCompoennt</h1>
//     </div>
//   );
// }

function ParentFunctionalComponent() {
  const state = { message: "message from parent" };
  const getDataFromChildf = data => {
    console.log("The data from child will be:", data);
  };
  return (
    <div>
      ParentFunctionalComponent
      <ChildFunctionalComponent
        message={state.message}
        getDataFromChild={data => {
          getDataFromChildf(data);
        }}
      />
    </div>
  );
}

export default ParentFunctionalComponent;

function ChildFunctionalComponent(props) {
  console.log("The props will be:", props);
  return (
    <div>
      <h1>{props.message || "message in child component"}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          props.getDataFromChild(Math.floor(Math.random() * 10));
        }}
      >
        Button
      </button>
    </div>
  );
}

// export default ChildFunctionalComponent
