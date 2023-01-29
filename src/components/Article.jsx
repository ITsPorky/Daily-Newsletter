import React, { useEffect, useState } from "react";

function Article() {
  const [data, setData] = useState();
  const [date, setDate] = useState(Date);

  useEffect(() => {
    fetch(`http://localhost:3030/article/0`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.content);
        const date = new Date(json.date).toDateString();
        setDate(date);
      });
  });

  return (
    <div className="Blog">
      <h1>data.title</h1>
      <div className="blog-details">
        <b>Author: OpenAI davinci003</b>
        <span>Published: {date}</span>
      </div>
      <p>{data}</p>
    </div>
  );
}

export default Article;
