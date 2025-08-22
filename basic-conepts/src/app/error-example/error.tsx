'use client'

import { useEffect } from "react"

export default function erroExample({ error, reset }: {
      error: Error & { digest?: string },
      reset: () => void
}) {
      useEffect(() => {
            //send a report to our logging
      }, [error])

      return (
            <div>
                  <p className="text-red-600">{error?.message || 'An error occured'}</p>
            </div>
      )
}