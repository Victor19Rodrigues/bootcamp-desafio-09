import React, { useRef, useEffect, useState } from "react";
import { useField } from "@rocketseat/unform";

import { Datepicker } from "./styles";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker() {
  const ref = useRef(null);
  const { registerField, defaultValue } = useField("date-picker");
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: "date",
      ref: ref.current,
      path: "props.selected",
      clearValue: pickerRef => {
        pickerRef.clear();
      }
    });
  }, [ref.current, "date"]); // eslint-disable-line

  return (
    <>
      <Datepicker
        id="date-picker"
        selected={selected}
        showTimeSelect
        timeIntervals={30}
        dateFormat="dd/MM/yyyy"
        onChange={date => setSelected(date)}
        ref={ref}
        placeholderText="Data do meetapp"
      />
    </>
  );
}
