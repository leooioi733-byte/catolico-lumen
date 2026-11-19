import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const lumenButton = cva(
  "btn-3d inline-flex min-h-11 w-full cursor-pointer select-none items-center justify-center px-6 py-3.5 text-lg uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground [--btn-depth:var(--primary-deep)] hover:brightness-[1.06]",
        gold: "bg-gold text-gold-foreground [--btn-depth:var(--gold-deep)] hover:brightness-[1.05]",
        outline:
          "border-2 border-border bg-card text-primary [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
        success:
          "bg-success text-success-foreground [--btn-depth:var(--success-deep)] hover:brightness-[1.05]",
        danger:
          "bg-destructive text-destructive-foreground [--btn-depth:var(--destructive-deep)] hover:brightness-[1.05]",
        answer:
          "border-2 border-border bg-card text-foreground [--btn-depth:var(--border)] hover:border-gold/80 hover:bg-accent/45",
        selectedAnswer:
          "border-2 border-gold bg-accent text-primary ring-2 ring-gold/30 [--btn-depth:var(--gold-deep)]",
        rightAnswer:
          "border-2 border-success bg-success/10 text-success [--btn-depth:var(--success-deep)]",
        wrongAnswer:
          "border-2 border-destructive bg-destructive/10 text-destructive [--btn-depth:var(--destructive-deep)]",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export function LumenButton({
  className,
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof lumenButton>) {
  return <button className={cn(lumenButton({ variant }), className)} {...props} />;
}
