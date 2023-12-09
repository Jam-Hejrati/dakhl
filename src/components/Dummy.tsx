"use client";

import { counterNumber } from "@/store/counter";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import React from "react";

export default function Dummy() {
  const [counter, setCounter] = useAtom(counterNumber);

  return (
    <div className="my-2">
      <div className="ml-12">counter: {counter}</div>
      <Button className="mx-2" onClick={() => setCounter(counter + 1)}>Increase</Button>
      <Button onClick={() => setCounter(counter - 1)}>Decrease</Button>
    </div>
  );
}
