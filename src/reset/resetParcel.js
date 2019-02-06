import React from "react";
import Parcel from "single-spa-react/parcel";

import * as ResetButton from "./Reset";

export default function ResetParcel(props) {
  return (
    <Parcel
      config={ResetButton}
      onReset={props.onReset}
    />
  );
}
