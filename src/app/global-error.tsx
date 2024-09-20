'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{process.env.NODE_ENV === 'development' ? error.message : 'An error occurred'}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}