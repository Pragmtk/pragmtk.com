type IPhoneFrameProps = {
  children: React.ReactNode
  className?: string
}

// A CSS-only iPhone: bezel, side buttons, Dynamic Island, status bar and home
// indicator around whatever is passed in as the screen.
export default function IPhoneFrame({ children, className = '' }: IPhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-[260px] rounded-[3.25rem] bg-linear-to-b from-[#3d3a3b] via-[#1c1a1b] to-[#2e2b2c] p-[10px] shadow-[0_0_0_1px_rgba(232,228,219,0.12),0_40px_80px_-24px_rgba(0,0,0,0.9)] ${className}`}
    >
      <span aria-hidden className="absolute top-[104px] -left-[3px] h-7 w-[3px] rounded-l-sm bg-[#2e2b2c]" />
      <span aria-hidden className="absolute top-[150px] -left-[3px] h-12 w-[3px] rounded-l-sm bg-[#2e2b2c]" />
      <span aria-hidden className="absolute top-[210px] -left-[3px] h-12 w-[3px] rounded-l-sm bg-[#2e2b2c]" />
      <span aria-hidden className="absolute top-[170px] -right-[3px] h-20 w-[3px] rounded-r-sm bg-[#2e2b2c]" />

      <div className="relative size-full overflow-hidden rounded-[2.6rem] bg-bg">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-10 flex h-12 items-center justify-between px-7 pt-1 font-sans text-[13px] font-medium text-fg"
        >
          <span>9:41</span>
          <span className="flex items-center gap-[5px]">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
              <rect x="0" y="7" width="3" height="4" rx="0.8" />
              <rect x="4.5" y="5" width="3" height="6" rx="0.8" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="0.8" />
              <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
              <path d="M7.5 2.2c2 0 3.9.8 5.3 2.1l1.1-1.1A9 9 0 0 0 7.5.6a9 9 0 0 0-6.4 2.6l1.1 1.1a7.5 7.5 0 0 1 5.3-2.1Z" />
              <path d="M7.5 5.3c1.2 0 2.3.5 3.1 1.2l1.1-1.1a6 6 0 0 0-8.4 0l1.1 1.1c.8-.7 1.9-1.2 3.1-1.2Z" />
              <path d="M7.5 8.3c.4 0 .8.2 1 .4L7.5 10.8 6.5 8.7c.2-.2.6-.4 1-.4Z" />
            </svg>
            <span className="relative h-[11px] w-[22px] rounded-[3px] border border-fg/40 p-px">
              <span className="block h-full w-4/5 rounded-[1.5px] bg-fg" />
            </span>
          </span>
        </div>
        <div aria-hidden className="absolute top-[11px] left-1/2 z-10 h-[26px] w-[84px] -translate-x-1/2 rounded-full bg-black" />

        {children}

        <div aria-hidden className="absolute bottom-2 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-fg/60" />
      </div>
    </div>
  )
}
