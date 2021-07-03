import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ProductContext from "../../Components/Services/ProductContext";
import "./Review.css";
import Constants from "../../Constants/Constants";
import { Button } from "@material-ui/core";
const Compress = require("compress.js");

const useStyles = makeStyles({
  table: {
    textAlign: "center",
    marginTop: "1rem",
    borderTop: "1px soild black",
    marginRight: "1rem",
  },
});

let rows = [];

export default function Review({ incrementLink, showNext = true }) {
  const classes = useStyles();
  const { finalProductState, dispatch } = useContext(ProductContext);
  const [showInsert, setShowInsert] = useState(false);
  const [productInsert, setProductInsert] = useState({});
  const [error, setError] = useState(false);
  const compress = new Compress();
  rows = finalProductState.itemList;

  async function resizeImageFn(file) {
    const resizedImage = await compress.compress([file], {
      size: 0.7, // the max size in MB, defaults to 2MB
      quality: 0.5, // the quality of the image, max is 1,
      maxWidth: 300, // the max width of the output image, defaults to 1920px
      maxHeight: 300, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
    });
    const img = resizedImage[0];
    const base64str = img.data;
    const imgExt = img.ext;
    const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt);
    return resizedFiile;
  }

  const deleteItem = (index) => {
    rows.splice(index, 1);
    dispatch({
      type: Constants.PRODUCT_INFO,
      payload: { ...finalProductState, itemList: rows },
    });
  };

  const showDisplay = () => {
    setShowInsert(!showInsert);
  };

  const addItem = () => {
    if (
      null !== productInsert &&
      null !== productInsert.name &&
      null !== productInsert.brand &&
      null !== productInsert.quantity &&
      null !== productInsert.measure &&
      null !== productInsert.value
    ) {
      //setError(!error);
      setShowInsert(!showInsert);
      if (rows !== null && rows.length === 0) {
        rows = [];
      }
      rows.push(productInsert);
      dispatch({
        type: Constants.PRODUCT_INFO,
        payload: {
          ...finalProductState,
          itemList: rows,
        },
      });
      setError(!error);
    } else {
      setError(true);
    }
  };

  function readFile(file) {
    var reader = new FileReader();
    reader.onload = readSuccess;
    function readSuccess(eventImg) {
      setProductInsert({
        ...productInsert,
        imageName: eventImg.target.result,
      });
    }
    reader.readAsDataURL(file);
  }

  const addProduct = (event) => {
    if ("image" === event.target.name) {
      const file = resizeImageFn(event.target.files[0]);

      file.then((resizeFile) => {
        // resizeImageFn(file)
        readFile(resizeFile);
        setProductInsert({
          ...productInsert,
          imageName: resizeFile.name,
        });
      });
    } else {
      setProductInsert({
        ...productInsert,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleImageUpload = (event, index) => {
    setProductInsert(rows[index]);
    const fileUpload = resizeImageFn(event.target.files[0]);

    fileUpload.then((resizeFile) => {
      var reader = new FileReader();
      reader.onload = readSuccess;
      function readSuccess(eventImg) {
        rows[index] = { ...rows[index], imageName: eventImg.target.result };
        dispatch({
          type: Constants.PRODUCT_INFO,
          payload: {
            ...finalProductState,
            itemList: rows,
          },
        });
      }
      reader.readAsDataURL(resizeFile);
    });
  };

  const displayDivInsert = () => {
    return (
      <div className="review_insert__main">
        {error && (
          <div style={{ textAlign: "center", color: "red", margin: "5px" }}>
            Please fill all field
          </div>
        )}
        <div className="review_insert">
          <div className="review_insert_name">Image</div>
          <div>
            <input
              id="upload"
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                addProduct(event);
              }}
            ></input>
          </div>
        </div>
        <div className="review_insert">
          <div className="review_insert_name">Name</div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(event) => addProduct(event)}
            ></input>
          </div>
        </div>
        <div className="review_insert">
          <div className="review_insert_name">Brand</div>
          <div>
            <input
              type="text"
              name="brand"
              onChange={(event) => addProduct(event)}
            ></input>
          </div>
        </div>
        <div className="review_insert">
          <div className="review_insert_name">Quantity</div>
          <div>
            <input
              type="text"
              name="quantity"
              onChange={(event) => addProduct(event)}
            ></input>
          </div>
        </div>
        <div className="review_insert">
          <div className="review_insert_name">Measure</div>
          <div>
            <input
              type="text"
              name="measure"
              onChange={(event) => addProduct(event)}
            ></input>
          </div>
        </div>
        <div className="review_insert">
          <div className="review_insert_name">Price</div>
          <div>
            <input
              type="text"
              name="price"
              onChange={(event) => addProduct(event)}
            ></input>
          </div>
        </div>
        <div className="review_insert_btn">
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            onClick={(event) => addItem()}
          >
            Save Item
          </Button>
        </div>
      </div>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" size="small">
              Image
            </TableCell>
            <TableCell align="center" size="small">
              Name
            </TableCell>
            <TableCell align="center" size="small">
              Brand
            </TableCell>
            <TableCell align="center" size="small">
              Quantity
            </TableCell>
            <TableCell align="center" size="small">
              Measure
            </TableCell>
            <TableCell align="center" size="small">
              Price
            </TableCell>
            <TableCell align="center" size="small"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  size="small"
                  height="70"
                  width="100"
                >
                  {row.imageName ? (
                    <img
                      className="review_item_img"
                      src={row.imageName}
                      alt="Open Store"
                    />
                  ) : (
                    <input
                      id="upload"
                      className="review_upload_image"
                      type="file"
                      name="image"
                      accept="image/png, image/jpeg"
                      title="abc"
                      onChange={(event) => handleImageUpload(event, index)}
                    ></input>
                  )}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  size="small"
                  height="70"
                  width="100"
                >
                  {row.name}
                </TableCell>
                <TableCell align="center" size="small" height="70" width="100">
                  {row.brand}
                </TableCell>
                <TableCell align="center" size="small" height="70" width="100">
                  {row.quantity}
                </TableCell>
                <TableCell align="center" size="small" height="70" width="100">
                  {row.measure}
                </TableCell>
                <TableCell align="center" size="small" height="70" width="100">
                  {row.price}
                </TableCell>
                <TableCell align="center" size="small" height="70" width="100">
                  <button
                    className="review_button"
                    onClick={() => deleteItem(index)}
                  >
                    <DeleteOutlineIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="review_button">
        <Button
          size="medium"
          variant="contained"
          color="primary"
          disabled={showInsert}
          onClick={(event) => showDisplay()}
        >
          Add Item
        </Button>
        {showNext && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={(event) => incrementLink(event)}
          >
            Next
          </Button>
        )}
      </div>
      {showInsert && displayDivInsert()}
    </TableContainer>
  );
}
