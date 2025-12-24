export function Button({ children, variant = "default", className = "", ...props }) {
  const base =
    "px-6 py-2 rounded-2xl font-medium transition";

  const styles = {
    default: "bg-pink-600 text-white hover:bg-pink-700",
    outline: "border border-pink-600 text-pink-600 hover:bg-pink-50",
    secondary: "bg-white text-pink-600 hover:bg-pink-100"
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
