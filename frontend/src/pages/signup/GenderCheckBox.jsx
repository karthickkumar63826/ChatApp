import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text"> Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-800"
            checked={selectGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text"> Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-800"
            checked={selectGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
