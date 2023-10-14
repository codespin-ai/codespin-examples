export function format(args: { value: string }) {
  return {
    amount: args.value,
    time: Date.now(),
  };
}
