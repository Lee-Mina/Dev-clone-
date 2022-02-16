import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import styled from "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
  const [blogContent, setBlogContent] = useState({
    title: "",
    content: "",
  });

  return (
    <div className="블로그">
      <Header />
      <div className="헤더제외모든디브">
        <div className="가로두개">
          <div className="topAndMiddle">
            <Top blogContent={blogContent} setBlogContent={setBlogContent} />
            <MiddleTop
              blogContent={blogContent}
              setBlogContent={setBlogContent}
            />
            {/* <Middle /> */}
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

function Top(props) {
  const getValue = (e) => {
    const { name, value } = e.target;
    props.setBlogContent({
      ...props.blogContent,
      [name]: value,
    });
  };
  return (
    <div className="제목과이미지">
      <button className="addImg">Add a cover image</button>
      <textarea
        Type="text"
        className="제목"
        placeholder="New post title here..."
        onChange={getValue}
        name="title"
      ></textarea>
    </div>
  );
}

function MiddleTop(props) {
  return (
    <div className="내용">
      <CKEditor
        editor={ClassicEditor}
        data="<textarea >Write your post content here...</textarea>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          props.setBlogContent({
            ...props.blogContent,
            content: data,
          });
          console.log(props.blogContent);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
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
