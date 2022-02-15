import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import styled from "./App.css";
// import styled from "styled-components";

//스타일
// const 블로그 = styled.div`
//   width: 678.4px;
//   height: 479.67px;

//   box-shdow: 0 0 0 1px rgb(255 255 255);
//   overflow-wrap: anywhere; ;
// `;
// const Publish = styled.div`
//   backgrounds-color: rgb(59 73 233);
//   border-color: white;
//   display: inline-block;
//   cursor: pointer;
//   overflow-wrap: nomal;
//   color: rgb(255 255 255);
// `;

// const WriteHere = styled.div`;
//   resize: none;
// `;

function App() {
  return (
    <div className="블로그">
      <Header />
      <div className="헤더제외모든디브">
        <div className="가로두개">
          <div className="topAndMiddle">
            <Top />
            <Middle />
          </div>
          <Side />
        </div>
        <끝 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="headers">
      <div className="left">
        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"></img>
        <div className="title">Create Post</div>
      </div>
      <div className="right">
        <button className="btnE">Edit</button>
        <button className="btn">Preview</button>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="제목과이미지">
      <button className="addImg">Add a cover image</button>
      <textarea
        Type="text"
        className="제목"
        placeholder="New post title here..."
      ></textarea>
    </div>
  );
}

function Middle() {
  return (
    <textarea
      className="내용"
      placeholder="Write your post content here..."
    ></textarea>
  );
}

function 끝() {
  return (
    <div className="footer">
      <button className="submit">Publish</button>
      <button className="save">Save draft</button>
    </div>
  );
}

function Side() {
  return (
    <div className="side">
      <h4>Writing a Great Post Title</h4>
      <ul>
        <li>
          Think of your post title as a super short (but compelling!)description
          - like an overview of the actual post in one short sentaence
        </li>
      </ul>
    </div>
  );
}

export default App;
