import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  const item = [];

  input.forEach((data) => {
    const sample = {};

    if (data.gender === "男性") {
      sample.color = "blue";
      sample.gender = "男性";
    } else {
      sample.color = "red";
      sample.gender = "女性";
    }
    sample.bmi = data.x / Math.pow(data.y / 100, 2);
    sample.weight = data.x;
    sample.height = data.y;

    item.push(sample);
  });

  return item;
};


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
