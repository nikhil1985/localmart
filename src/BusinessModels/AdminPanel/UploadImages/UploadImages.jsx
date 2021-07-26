import React from "react";
import "./UploadImages.css";

const onFileChangeHandler = (event) => {
  const formData = new FormData();
  for (let i = 0; i < event.target.files.length; i++) {
    formData.append("file", event.target.files[i]);
  }
};

const UploadImages = () => {
  return (
    <div className="upload_images_main">
      <input
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={onFileChangeHandler}
      />
    </div>
  );
};

export default UploadImages;
