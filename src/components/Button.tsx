//rfc
export function Button({
  label,
  ...props
}: { label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{label}</button>;
}
