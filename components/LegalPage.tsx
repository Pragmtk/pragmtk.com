// Typography for the long-form legal pages, applied to the plain HTML inside.
const legal = [
  'max-w-[680px] flex-1 py-16',
  '[&_h1]:mb-3 [&_h1]:font-mono [&_h1]:text-[length:clamp(28px,5vw,40px)] [&_h1]:leading-[1.1] [&_h1]:font-normal',
  '[&_h2]:mt-10 [&_h2]:mb-4',
  '[&_:is(p,li,dd)]:mb-3 [&_:is(p,li,dd)]:text-[15px] [&_:is(p,li,dd)]:leading-[1.7] [&_:is(p,li,dd)]:text-fg-mid',
  '[&_ul]:pl-6 [&_ol_ol]:mt-2 [&_ol_ol]:list-[lower-alpha] [&_ol_ol]:pl-6',
  '[&_dt]:text-[15px] [&_dt]:text-fg [&_dt]:italic [&_dd]:ml-0',
  '[&_:is(strong,em)]:text-fg',
  '[&_a]:font-[family-name:inherit] [&_a]:text-[length:inherit] [&_a]:tracking-normal [&_a]:text-fg [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent',
].join(' ')

// Numbers each h2 as a section and each top-level list item as a clause (1.1, 1.2, ...).
const numbered = [
  "[counter-reset:section] [&_h2]:[counter-increment:section] [&_h2]:before:content-[counter(section)_'._']",
  '[&>ol]:list-none [&>ol]:pl-10 [&>ol]:[counter-reset:clause]',
  '[&>ol>li]:relative [&>ol>li]:[counter-increment:clause]',
  '[&>ol>li]:before:absolute [&>ol>li]:before:-left-10 [&>ol>li]:before:font-mono [&>ol>li]:before:text-[13px] [&>ol>li]:before:text-fg-dim',
  "[&>ol>li]:before:content-[counter(section)_'.'_counter(clause)]",
].join(' ')

type LegalPageProps = {
  numbered?: boolean
  children: React.ReactNode
}

export default function LegalPage({ numbered: isNumbered = false, children }: LegalPageProps) {
  return <main className={isNumbered ? `${legal} ${numbered}` : `${legal} [&>ol]:pl-6`}>{children}</main>
}
