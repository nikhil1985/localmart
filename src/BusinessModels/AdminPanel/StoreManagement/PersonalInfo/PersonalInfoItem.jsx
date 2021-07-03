import React from 'react';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";


const PersonalInfoItem = ({htmlFor,name,spanId,helpText,type="text",handleValidateInput,valueForEle }) => {

    const showHelpText = (id) => {
        var popUp = document.getElementById(id);
        popUp.classList.toggle("show");
      };

    return (
        <div className="personal_info_content_store_info">
        <label
          htmlFor={htmlFor}
          className="personal_info_content_store_info_label"
        >
          {name}
        </label>
        <input
          type={type}
          id={htmlFor}
          name={htmlFor}
          required={true}
          value={null !== valueForEle ? valueForEle : ""}
          onChange={(event)=>{handleValidateInput(event)}}
        />
        <div
          className="personal_info_content_store_info_label clickMe popup"
          onClick={() => {
            showHelpText(`${spanId}`);
          }}
        >
          <HelpOutlineIcon />
          <span className="popuptext" id={`${spanId}`}>
            {helpText}
          </span>
        </div>
      </div>

    )
}

export default PersonalInfoItem
