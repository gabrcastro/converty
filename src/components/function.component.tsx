import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { LiaExchangeAltSolid } from "react-icons/lia";

interface FunctionProps {
  title: string;
  formula: string[];
}

export function FunctionComponent({ title, formula }: FunctionProps) {
  const [input, setInput] = useState("");

  return (
    <Card className="w-full lg:w-[30%]">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-1">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button variant={"outline"}>
          <LiaExchangeAltSolid className="size-4" />
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        {formula.map((item) => (
          <span key={item} className="text-sm flex flex-col text-blue-950">
            {item}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
}
