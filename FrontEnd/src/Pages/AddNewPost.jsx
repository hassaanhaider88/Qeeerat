import React, { useRef, useState } from "react";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { handleUserSubmitPosts } from "../Services/MoreOptions";
import SelectSurah from "../Components/SelectSurah";
import CtmButton from "../Components/CtmButton";

const AddNewPost = () => {
  const [UserSelectedVideo, setUserSelectedVideo] = useState(null);
  const InputeFileRef = useRef(null);
  const [SurahName, setSurahName] = useState("");
  const [AyatFrom, setAyatFrom] = useState(1);
  const [AyatTo, setAyatTo] = useState(1);
  const handleSubmitPosts = () => {
    if (UserSelectedVideo === null) {
      alert("Please select a video");
      return;
    }
    if (SurahName === "") {
      alert("Please select a Surah Name");
      return;
    }
    if (AyatFrom < 0 || AyatTo < 0) {
      alert("Please select Ayat From and Ayat To");
      return;
    }
    if (AyatFrom > AyatTo) {
      alert("Ayat From should be less than Ayat To");
      return;
    }
    var Vale = handleUserSubmitPosts(SurahName, AyatFrom, AyatTo, setPostData);
    console.log(Vale);
  };
  const hanldeUserSelectedVideo = (e) => {
    if (e.target.files[0].size > 50 * 1024 * 1024) {
      alert("File size should be less than 50MB");
      return;
    }
    console.log(e.target.files[0]);

    console.log(URL.createObjectURL(e.target.files[0]));

    setUserSelectedVideo(URL.createObjectURL(e.target.files[0]));
  };
  const handleOpenFileSelector = () => {
    InputeFileRef.current.click();
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-5 md:py-10 px-7 md:px-14 text-white min-h-screen bg-black">
      <div className="md:w-[50%] overflow-hidden p-3 w-full h-[80vh] border-2 border-[#6A7282] rounded-4xl">
        {UserSelectedVideo ? (
          <video
            src={UserSelectedVideo}
            preload="true"
            disableRemotePlayback
            disablePictureInPicture
            controls
            className="w-full h-full rounded-4xl"
          ></video>
        ) : (
          <div
            onClick={handleOpenFileSelector}
            title="Select Vidoe"
            className="w-full active:scale-95 duration-150 transition-all cursor-pointer h-full flex justify-center items-center"
          >
            <SiGoogledisplayandvideo360 size={"30px"} />
          </div>
        )}
      </div>
      <input
        onChange={(e) => hanldeUserSelectedVideo(e)}
        ref={InputeFileRef}
        accept="video/*"
        hidden
        type="file"
        name="Video"
        required
        id="SelectVideo"
      />
      <div className="w-full my-5 flex justify-center items-center px-5">
        {/* <p>Select Surah Name</p> */}
        <SelectSurah SurahName={SurahName} setSurahName={setSurahName} />
      </div>
      <div className="w-full my-1 flex justify-evenly items-center px-5">
        <p>Select Ayat From</p>
        <input
          value={AyatFrom}
          onChange={(e) => setAyatFrom(e.target.value)}
          placeholder="Ayat From"
          className="py-2 px-4 border-[#6A7282] border  active:outline-white rounded-3xl text-gray-300  active:outline-2"
          type="number"
        />
      </div>
      <div className="w-full my-1 flex justify-evenly items-center px-5">
        <p>Select Ayat To &nbsp; &nbsp;</p>
        <input
          value={AyatTo}
          onChange={(e) => setAyatTo(e.target.value)}
          placeholder="Ayat To"
          className="py-2 border-[#6A7282] border  px-4 active:outline-white rounded-3xl text-gray-300  active:outline-2"
          type="number"
        />
      </div>

      <div
        className="w-full flex justify-center items-center my-6"
        onClick={handleSubmitPosts}
      >
        <CtmButton Text={"Submit"} />
      </div>
      <p className="sticky text-sm text-[#6A7282] bottom-0 right-0">Your Vidoe Will be submitted For Reviewing</p>
    </div>
  );
};

export default AddNewPost;
