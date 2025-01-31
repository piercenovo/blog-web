export const SearchIcon = ({
  className
}: {
  className?: string | undefined
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6' />
    </svg>
  )
}
