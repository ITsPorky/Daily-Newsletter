import React, { useEffect, useState } from "react";

function Article() {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3030/article/0`)
      .then((res) => res.json())
      .then((json) => {
        setData({
          title: json.title,
          content: json.content,
        });
      });
  });

  return (
    <div className="article">
      <h1>{data.title}</h1>
      <div className="article-details">
        <b>Author: OpenAI davinci003</b>
      </div>
      <p>{data.content}</p>
    </div>
  );
}

export default Article;
