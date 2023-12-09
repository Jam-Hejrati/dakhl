import Dummy from "@/components/Dummy";
import { counterNumber } from "@/store/counter";
import { Card, CardBody, Checkbox } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Dummy />
      <Card>
        <CardBody>This is the Card body</CardBody>
      </Card>
      <Checkbox defaultSelected>Test</Checkbox>

    </>
  );
}
