import React, { useEffect } from "react";
import { FiUpload } from "react-icons/fi";

const CloudinaryUploader = ({ onUpload }) => {
  useEffect(() => {
    if (!window.cloudinary) return;

    window.myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "camera", "url", "google_drive", "unsplash"],
        multiple: false,
        cropping: false,
        folder: "user_uploads",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          onUpload(result.info.secure_url);
        }
      }
    );
  }, [onUpload]);

  const openWidget = () => {
    window.myWidget && window.myWidget.open();
  };

  return (
    <div
      onClick={openWidget}
      style={{
        width: 55,
        height: 55,
        borderRadius: "50%",
        background: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <FiUpload size={26} />
    </div>
  );
};

export default CloudinaryUploader;
