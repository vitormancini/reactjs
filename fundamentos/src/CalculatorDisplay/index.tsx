import { Text } from "../Text";

type CalculatorDisplayProps = {
  operation: string;
  result: string;
};

export function CalculatorDisplay({
  operation,
  result,
}: CalculatorDisplayProps) {
  return (
    <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
      <Text variant="muted" className="flex items-center justify-end">
        {result && operation}
      </Text>
      <div className="flex items-center justify-between h-9">
        <Text variant="muted">=</Text>
        <Text variant="blast">{result || operation}</Text>
      </div>
    </div>
  );
}
