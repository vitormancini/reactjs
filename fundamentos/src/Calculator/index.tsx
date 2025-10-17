import { Button } from "../Button";
import { CalculatorDisplay } from "../CalculatorDisplay";
import { Card } from "../Card";

type CalculatorProps = {
  operation: string;
  result: number;
};

export function Calculator({ operation, result }: CalculatorProps) {
  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
      <CalculatorDisplay operation={operation} result={result} />
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Button className="w-16 h-16" variant="default">
            CE
          </Button>
          <Button className="flex-1 h-16" variant="default">
            C
          </Button>
          <Button className="w-16 h-16" variant="primary">
            /
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="w-16 h-16" variant="default">
            7
          </Button>
          <Button className="w-16 h-16" variant="default">
            8
          </Button>
          <Button className="w-16 h-16" variant="default">
            9
          </Button>
          <Button className="w-16 h-16" variant="primary">
            X
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="w-16 h-16" variant="default">
            4
          </Button>
          <Button className="w-16 h-16" variant="default">
            4
          </Button>
          <Button className="w-16 h-16" variant="default">
            6
          </Button>
          <Button className="w-16 h-16" variant="primary">
            -
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="w-16 h-16" variant="default">
            1
          </Button>
          <Button className="w-16 h-16" variant="default">
            2
          </Button>
          <Button className="w-16 h-16" variant="default">
            3
          </Button>
          <Button className="w-16 h-16" variant="primary">
            +
          </Button>
        </div>
        <div className="flex gap-3">
          <Button className="flex-1 h-16" variant="default">
            0
          </Button>
          <Button className="w-16 h-16" variant="default">
            ,
          </Button>
          <Button className="w-16 h-16" variant="primary">
            =
          </Button>
        </div>
      </div>
    </Card>
  );
}
