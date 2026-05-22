export default function Button() {
  return (
    <button
      className="bg-foreground text-background rounded-md p-3 font-bold transition-opacity hover:opacity-80 disabled:opacity-50"
      type="submit"
    >
      sample text
    </button>
  );
}
