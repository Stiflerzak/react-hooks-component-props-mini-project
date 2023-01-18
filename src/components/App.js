import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import Articlelist from "./ArticleList"
import Article from "./Article";



console.log(blogData);

function App({name,image,about,posts}) {
  return (
    <div className="App">    
      <Header name={blogData.name}/>
      <About/>
      <Articlelist posts={blogData.posts}/>
      <Article/>
    </div>
  );
}

export default App;
