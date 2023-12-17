"use client";

import { Button, Checkbox } from "@nextui-org/react";
import { useAtom } from "jotai";
import React from "react";
import { count } from "../store/counterAtom";

export default function Dummy() {
  const [counter, setCounter] = useAtom(count);

  return (
    <div className="my-2 flex items-center flex-col gap-3">
      <div>counter: {counter}</div>
      <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
      <Button onClick={() => setCounter(counter - 1)}>Decrease</Button>
      <Checkbox />
    </div>
  );
}
