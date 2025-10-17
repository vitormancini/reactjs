import type { JSX } from "react";
import styles from "./styles.module.css";

type MeuComponenteProps = {
  variant: string;
  children: JSX.Element;
};

export function MeuComponente({
  variant,
  children,
  ...props
}: MeuComponenteProps) {
  return (
    <div>
      <h1 className={styles[variant]} {...props}>
        Meu componente
      </h1>
      {children}
    </div>
  );
}

// ...props significa que, qualquer outra propriedade opcional que for enviada ao componente, será eplicada
