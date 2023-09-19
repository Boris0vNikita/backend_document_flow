import React, { Component } from "react";
import { Carousel } from "./carousel/Carousel";
import "./Intermediary.css";
import { useState } from "react";
import Modal from "./Modal/Modal";
import "./Modal/modal.css";
let keyAPI = "c637d92";
let mas = [];
let likePick = "/Like.jpg";
let likePick1 = "/Like.jpg";
let likePick2 = "/Like1.jpg";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      likePick: "/Like.jpg",
    };
    this.handellClick = this.handellClick.bind(this);
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=" + this.props.id + "&apikey=" + keyAPI)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
          console.log(this.state.items);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  componentDidUpdate() {}

  handellClick() {
    if (this.state.likePick == "/Like.jpg") {
      this.setState({ likePick: likePick2 });
    } else {
      this.setState({ likePick: likePick1 });
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading</p>;
    } else {
      return (
        <div className="movie">
          <img
            className="imgInter"
            alt={items.Title}
            title={items.Title}
            src={items.Poster}
            onClick={() => {}}
          />
          <div className="movie__column">
            <img
              className="PictursInter"
              src={this.state.likePick}
              onClick={() => {
                mas = [
                  items.Title,
                  items.Year,
                  items.Runtime,
                  items.imdbRating,
                ];
                this.handellClick();
              }}
            ></img>
            <h3 className="movie__titel">Title:{" " + items.Title}</h3>
            <h5 className="movie__year">Year:{" " + items.Year}</h5>

            <ul className="movie__genres">Runtime:{items.Runtime}</ul>
            <ul className="movie__genres">Rating:{items.imdbRating}</ul>
          </div>
        </div>
      );
    }
  }
}
console.log(mas);
export const MassiveTop = () => {
  return (
    <>
      <h1>Top</h1>
      <br />
      {/* <Carousel> */}
      {/* <Ccomponent id="tt0772517" /> */}
      {/* <Ccomponent id="tt0097576" />
        <Ccomponent id="tt0055630" />
        <Ccomponent id="tt0095016" />
        <Ccomponent id="tt0083658" />
        <Ccomponent id="tt0133093" />
        <Ccomponent id="tt0103064" />
        <Ccomponent id="tt0110413" />
      </Carousel> */}
    </>
  );
};
// export const MassiveHorror = () => {
//   return (
//     <>
//       <h1>Ужасы</h1>
//       <br />
//       <Carousel>
//         <Ccomponent id="tt1396484" />
//         <Ccomponent id="tt1457767" />
//         <Ccomponent id="tt0090605" />
//         <Ccomponent id="tt5052448" />
//         <Ccomponent id="tt3065204" />
//       </Carousel>
//     </>
//   );
// };
// export const MassiveAction = () => {
//   return (
//     <>
//       <h1>Экшен</h1>
//       <br />
//       <Carousel>
//         <Ccomponent id="tt2911666" />
//         <Ccomponent id="tt0468569" />
//         <Ccomponent id="tt1375666" />
//         <Ccomponent id="tt1436045" />
//         <Ccomponent id="tt0840361" />
//         <Ccomponent id="tt0499549" />
//       </Carousel>
//     </>
//   );
// };

export const Random = () => {
  return (
    <>
      <Ccomponent id="tt2911666" />
    </>
  );
};
// export const MassiveComedy = () => {
//   return (
//     <>
//       <h1>Комедия</h1>
//       <br />
//       <Carousel>
//         <Ccomponent id="tt9764362" />
//         <Ccomponent id="tt12003946" />
//         <Ccomponent id="tt6966692" />
//         <Ccomponent id="tt1119646" />
//         <Ccomponent id="tt2584384" />
//         <Ccomponent id="tt10288566" />
//       </Carousel>
//     </>
//   );
// };

export const Lenta = () => {
  return (
    <>
      <Random />
      <MassiveTop />
      {/* <MassiveComedy />
      <MassiveAction />
      <MassiveHorror />
      <MassiveComedy /> */}
    </>
  );
};
