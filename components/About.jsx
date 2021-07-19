import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Person } from "@material-ui/icons";
import Image from "next/image";
import Theater from "../images/theater.jpg";

export default function About() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "Person",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "Theater",
    },
    {
      id: "2",
      icon: "ChevronRight",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "Theater",
    },
    {
      id: "3",
      icon: "ChevronLeft",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "Theater",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(
          currentSlider > 0 ? currentSlider - 1 : data.length - 1
        )
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="about" id="about">
      <div className="left"></div>
      <div className="right">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlider * 33.33}%)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="leftItem">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <Person className="avatar" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Tekst {currentSlider + 1}</span>
                  </div>
                </div>
                <div className="right">
                  <Image src={Theater} alt="" layout="fill" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrow leftArrow" onClick={() => handleClick("left")}>
          <ChevronLeft className="icon" />
        </div>
        <div className="arrow rightArrow">
          <ChevronRight className="icon" onClick={() => handleClick("right")} />
        </div>
      </div>
    </div>
  );
}
