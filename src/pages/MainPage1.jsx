import FileUpload from "../components/FileUpload.jsx";

import Menubar from "../components/Menubar.jsx";
import VideoAnalysis from "../components/VideoAnalysis.jsx";
import "./MainPage1.css";
import MeshViewer from "../components/MeshViewer.jsx";
import ObjViewer from "../components/ObjViewer.jsx";
import ObjViewer2 from "../components/ObjViewer2.jsx";
import ObjViewer3 from "../components/ObjViewer3.jsx";
// import ObjVideo from "../components/ObjVideo.jsx";
import GlbViewer from "../components/GlbViewer.jsx";
import { useNavigate } from "react-router";
import React, { useState } from "react";

function MainPage1() {
  const navigate = useNavigate();
  const [videoState, setVideoState] = useState(false);
  const [num, setNum] = useState(2);

  const videoSelect = (n) => {
    setNum(n);
    // console.log(num);
    setVideoState(true);
  };

  //회원가입 페이지로 이동하는 함수
  const goToSignUp = () => {
    navigate("/signup");
  };

  // 로그인 페이지로 이동하는 함수
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {/* <div className="MainPage1">
        <Menubar />
        <VideoAnalysis ex={num} />
        <ObjViewer ex={num} />
        <ObjViewer3 ex={num} />
      </div> */}
      {!videoState ? (
        <div className="MainPage1">
          <Menubar setVideoState={setVideoState} />
          {/* 로그인 페이지로 이동하는 버튼 추가 */}
          {/* <button onClick={goToLogin}>로그인 페이지</button> */}
          <div className="selectVideo">
            <img
              className="exampleImg"
              src="/images/1.PNG"
              onClick={() => videoSelect(1)}
            />
            <img
              className="exampleImg"
              src="/images/5.PNG"
              onClick={() => videoSelect(5)}
            />
            <img
              className="exampleImg"
              src="/images/23.PNG"
              onClick={() => videoSelect(23)}
            />
            <img
              className="exampleImg"
              src="/images/27.PNG"
              onClick={() => videoSelect(27)}
            />
            <img
              className="exampleImg"
              src="/images/35.PNG"
              onClick={() => videoSelect(69)}
            />
            <FileUpload />
          </div>
        </div>
      ) : (
        <div className="MainPage1">
          {/* setVideoState를 Menubar에 전달 */}
          <Menubar setVideoState={setVideoState} />
          {console.log(num)}
          <VideoAnalysis ex={num} />
          {/* <ObjViewer ex={num} /> */}
          {/* <ObjVideo ex={num} /> */}
        </div>
      )}
    </>
  );
}

export default MainPage1;
