interface CapsuleButtonProps {
  direction?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
}

const ArrowLeft = () => (
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
    <path
      d="M5.5 0.5L0.5 5.25L5.5 10.5"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="1"
      y1="5.25"
      x2="23"
      y2="5.25"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
    <path
      d="M18.5 0.5L23.5 5.25L18.5 10.5"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="23"
      y1="5.25"
      x2="1"
      y2="5.25"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Double-layer capsule button matching Figma spec.
 *
 * - Icon-only (arrows): outer 50×36 r11, inner 41×27 r16, equal 4.5px padding all sides
 * - Text + icon ("Work with me"): outer auto-width, same layered construction
 *
 * Outer shell: #9CA79A, inset stroke 0.66px #000
 * Inner capsule: #F8D5A6, inset stroke 0.66px #000
 */
export default function CapsuleButton({
  direction,
  children,
  className = "",
}: CapsuleButtonProps) {
  const isIconOnly = !children && direction;

  if (isIconOnly) {
    return (
      <button
        type="button"
        className={`flex items-center justify-center hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-150 ${className}`}
        style={{
          width: "50px",
          height: "36px",
          borderRadius: "11px",
          backgroundColor: "#9CA79A",
          boxShadow: "inset 0 0 0 0.66px #000000",
          padding: "0",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="flex items-center justify-center"
          style={{
            width: "41px",
            height: "27px",
            borderRadius: "16px",
            backgroundColor: "#F8D5A6",
            boxShadow: "inset 0 0 0 0.66px #000000",
          }}
        >
          {direction === "left" ? <ArrowLeft /> : <ArrowRight />}
        </span>
      </button>
    );
  }

  // Text + icon variant (e.g. "Work with me")
  return (
    <button
      type="button"
      className={`flex items-center justify-center hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-150 ${className}`}
      style={{
        borderRadius: "11px",
        backgroundColor: "#9CA79A",
        boxShadow: "inset 0 0 0 0.66px #000000",
        padding: "4.5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      <span
        className="flex items-center gap-3"
        style={{
          borderRadius: "16px",
          backgroundColor: "#F8D5A6",
          boxShadow: "inset 0 0 0 0.66px #000000",
          padding: "10px 20px",
        }}
      >
        <span className="text-[16px] font-medium text-black whitespace-nowrap">
          {children}
        </span>
        {direction === "left" ? <ArrowLeft /> : direction === "right" ? <ArrowRight /> : null}
      </span>
    </button>
  );
}

export { ArrowLeft, ArrowRight };
