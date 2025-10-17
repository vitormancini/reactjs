import { useState } from "react";
import { Button } from "../Button";
import { CalculatorDisplay } from "../CalculatorDisplay";
import { Card } from "../Card";

const buttons = [
  [
    { input: "CE" },
    { input: "C", className: "flex-1 h-16" },
    { input: "/", variant: "primary" },
  ],
  [
    { input: "7" },
    { input: "8" },
    { input: "9" },
    { input: "*", variant: "primary" },
  ],
  [
    { input: "4" },
    { input: "5" },
    { input: "6" },
    { input: "-", variant: "primary" },
  ],
  [
    { input: "1" },
    { input: "2" },
    { input: "3" },
    { input: "+", variant: "primary" },
  ],
  [
    { input: "0", className: "flex-1 h-16" },
    { input: "C" },
    { input: "=", variant: "primary" },
  ],
];

export function Calculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleInputClick(input: string) {
    if (input === "=") {
      const operationResult = eval(operation);
      setResult(operationResult);
      return;
    }
    setOperation(`${operation} ${input}`);
  }

  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
      <CalculatorDisplay operation={operation} result={result} />
      {/* Keyboard */}
      <div className="flex flex-col gap-3">
        {buttons.map((row, index) => (
          <div className="flex gap-3" key={`row-${index}`}>
            {row.map((button) => (
              <Button
                className={`${
                  button.className ? button.className : "w-16 h-16"
                }`}
                variant={(button.variant ?? "default") as "default" | "primary"}
                key={button.input}
                onClick={() => handleInputClick(button.input)}
              >
                {button.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
