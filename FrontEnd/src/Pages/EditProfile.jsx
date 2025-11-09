import { useRef, useState } from "react";
import { IoCameraReverseOutline } from "react-icons/io5";
import SelectCountry from "../Components/SelectCountry";
import { handleUserEditProfile } from "../Services/MoreOptions";

const EditProfile = () => {
  const GetFileExploreOpenRef = useRef(null);
  const [UserSelectProfileImg, setUserSelectProfileImg] = useState(
    "https://i.pinimg.com/originals/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg"
  );
  const [UName, setUName] = useState("");
  const [UUserName, setUUserName] = useState("");
  const [Location, setLocation] = useState("");
  const [Bio, setBio] = useState("");

  const hanleUserProfileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setUserSelectProfileImg(URL.createObjectURL(file));
  };

  const handleSaveChanges = () => {
    if (
      UName.trim() === "" ||
      UUserName.trim() === "" ||
      Location.trim() === "" ||
      Bio.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }
    // Logic to save changes goes here
    console.log("Changes saved!");
    handleUserEditProfile(UName, UUserName, Location, Bio, UserSelectProfileImg);
  };

  return (
    <div className="w-full min-h-screen  bg-black text-white ox-5 sm:px-10 py-5">
      <div className="EditImage flex justify-center items-center relative h-fit cursor-pointer group  overflow-hidden">
        <img
          className="w-30  h-30 rounded-full"
          src={UserSelectProfileImg}
          alt=""
        />
        <div
          onClick={() => GetFileExploreOpenRef.current.click()}
          className="Overlay opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-full  w-30 h-30 bg-[#3333337c]  flex flex-col justify-center items-center  duration-300 cursor-pointer"
        >
          <div className="Text">
            <IoCameraReverseOutline size={"40"} />
          </div>
          <input
            type="file"
            hidden
            onChange={(e) => hanleUserProfileChange(e)}
            ref={GetFileExploreOpenRef}
            id=""
          />
        </div>
      </div>
      <div className="AllInputFields gap-5 md:py-11 py-5 flex flex-col">
        <div className="NameAndUserName w-full px-4 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <input
            value={UName}
            onChange={(e) => setUName(e.target.value)}
            type="text"
            autoComplete="new-password"
            className="sm:w-1/2 w-full py-2 px-5 rounded-2xl border border-[#88358F] active:g-[#88358F] duration-300 transition-all"
            placeholder="Name"
          />
          <input
            value={UUserName}
            onChange={(e) => setUUserName(e.target.value)}
            type="text"
            className="sm:w-1/2 w-full py-2 px-5 rounded-2xl border border-[#88358F] active:border-[#88358F] duration-300 transition-all"
            placeholder="username"
          />
        </div>

        <div className="EmailAndLocation w-full px-4 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <input
            type="email"
            autoComplete="new-password"
            className="sm:w-1/2 w-full py-2 px-5 rounded-2xl border border-[#88358F] active:g-[#88358F] duration-300 transition-all"
            placeholder="Email"
            readOnly
          />
          <SelectCountry Location={Location} setLocation={setLocation} />
        </div>

        <div className="px-4">
          <textarea
            value={Bio}
            onChange={(e) => setBio(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="5"
            className="w-full p-4  rounded-2xl border border-[#88358F] active:border-[#88358F] duration-300 transition-all"
            placeholder="Tell Us About Yourself!"
          ></textarea>
        </div>
      </div>
      <div className="ButtonDiv w-full flex justify-center items-center">
        <button
          onClick={handleSaveChanges}
          className="bg-[#88358F] cursor-pointer py-2 px-6 rounded-3xl hover:scale-95 duration-300 transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
