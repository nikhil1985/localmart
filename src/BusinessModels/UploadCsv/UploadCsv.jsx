import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import csv from "csv";
import ProductContext from "../../Components/Services/ProductContext";
import Constants from "../../Constants/Constants";
import "./UploadCsv.css";

const UploadCsv = ({ incrementLink }) => {
  const { finalProductState, dispatch } = useContext(ProductContext);

  const onDrop = useCallback((acceptedFiles) => {
    var userList = [];

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
          for (var i = 0; i < data.length; i++) {
            const name = data[i][0];
            const brand = data[i][1];
            const quantity = data[i][2];
            const measure = data[i][3];
            const price = data[i][4];
            const newUser = {
              name: name,
              brand: brand,
              quantity: quantity,
              measure: measure,
              price: price,
            };
            userList.push(newUser);
          }
          const itemList = userList.slice(1);
          dispatch({
            type: Constants.PRODUCT_INFO,
            payload: { ...finalProductState, itemList: itemList },
          });
          if (null !== incrementLink) {
            incrementLink();
          }
        });
      };
      reader.readAsBinaryString(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div align="center" className="uploadcsv_main" {...getRootProps()}>
      <input
        className="uploadcsv_main_input"
        {...getInputProps()}
        type="file"
        accept=".csv"
      />
      <p className="uploadcsv_main_p">
        Drag 'n' drop some files here, or click to select files
      </p>
    </div>
  );
};

export default UploadCsv;
