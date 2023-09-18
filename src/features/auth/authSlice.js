import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementAsync, selectCount } from "./components/Login";

export default function authSlice() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return <>
  </>;
}
