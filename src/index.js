import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2> {props.email} </h2>
      <img src={props.img} alt={props.alt} />
      <p> {props.tel} </p>
      <p> {props.email} </p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      email="b@beyonce.com"
      tel="+123 456 789"
    />

    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      email="jack@nowhere.com"
      tel="+987 654 321"
    />

    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
      email="gmail@chucknorris.com"
      tel="+918 372 574"
    />
  </div>,
  document.getElementById("root")
);
