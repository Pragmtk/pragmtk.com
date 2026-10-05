'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { readChoice, setChoice, type ConsentChoice } from '@/lib/consent'

const inlineLink = 'font-[family-name:inherit] text-[length:inherit] tracking-normal text-fg underline underline-offset-2'
const button = 'cursor-pointer border px-[1.1rem] py-[0.6rem] font-mono text-[12px] font-normal tracking-[0.06em]' +
  ' uppercase mobile:flex-1 transition-colors duration-300 ease-out'

export default function CookieConsent() {
  const [hidden, setHidden] = useState(true)
  const primaryRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (readChoice() === null) setHidden(false)

    // Delegated so links rendered after client-side navigation also work.
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null
      if (!target?.closest('[data-consent-open]')) return
      e.preventDefault()
      setHidden(false)
      requestAnimationFrame(() => primaryRef.current?.focus())
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  function choose(choice: ConsentChoice) {
    setChoice(choice)
    setHidden(true)
  }

  return (
    <div
      className="fixed right-6 bottom-6 left-6 z-100 ml-auto flex max-w-[560px] flex-col gap-4 border border-border bg-bg px-6 py-5 mobile:right-4 mobile:bottom-4 mobile:left-4"
      role="region" aria-label="Cookie consent" hidden={hidden}>
      <p className="text-[14px] leading-[1.6] text-fg-mid">
        We use Google Analytics cookies to understand how people use this site. They are only set if you accept. See
        our <Link href="/privacy#cookies" className={inlineLink}>privacy policy</Link>.
      </p>
      <div className="flex justify-end gap-3">
        <button type="button" className={`${button} border-border bg-transparent text-fg-mid hover:border-accent hover:text-accent`} onClick={() => choose('denied')}>
          Reject
        </button>
        <button type="button" className={`${button} border-none bg-fg text-bg hover:bg-accent`} ref={primaryRef} onClick={() => choose('granted')}>
          Accept
        </button>
      </div>
    </div>
  )
}
