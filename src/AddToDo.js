import React from "react";

export const AddToDo = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let addActivity = {
      text: e.target[0].value,
      number: e.target[1].value,
      status: false,
    };
    props.addActivity(addActivity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add activity &#x21e8;</h3>
      <input
        type="text"
        name="input"
        className="activity"
        placeholder="what's next..."
      />
      <h3>Assign priority &#x21e8;</h3>
      <input type="number" className="number"></input>

      <button className="submit-btn" type="submit">
        {/* &#43; */}
      </button>
    </form>
  );
};
