export default function BudjLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="241 176 590 672" role="img" aria-label="budj" className={className}>
      <path
        d="M372.5 176C445.125 176 504 234.875 504 307.5L504 413.311C604.39 433.493 680 522.167 680 628.5C680 749.727 581.727 848 460.5 848C346.691 848 253.113 761.385 242.087 650.479C241.37 644.92 241 639.253 241 633.5L241 307.5C241 234.875 299.875 176 372.5 176Z"
        className="fill-budj-cyan"
      />
      <circle cx="643.5" cy="688.5" r="159.5" className="fill-budj-tangerine" />
      <circle cx="671.5" cy="688.5" r="159.5" className="fill-budj-accent" />
    </svg>
  )
}
