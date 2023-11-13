export function Header({ text }: { text: string }): JSX.Element {
  return <h1 className='text-2xl font-bold'>{text}</h1>;
}
