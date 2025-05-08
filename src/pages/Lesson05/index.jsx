import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  const count = {};
  input.forEach(input =>{
    const height = Math.round(data.y);
    if(!count[height]){
      count[height] = {男性:0,女性:0};
    }
    count[height][data.gender]+=1;
  });

  count.sort((a,b) => (a-b));
  count.map((height)=>({
    bin:height,
    男性:count[height].男性,
    女性:count[height].女性,
  }));
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
