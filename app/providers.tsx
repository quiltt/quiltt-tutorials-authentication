'use client'

import { useState, useEffect } from 'react'
import { QuilttProvider } from "@quiltt/react"

export function Providers({ quilttProfileId, children }) {
  const [token, setToken] = useState()

  useEffect(() => {
    fetch('/api/quiltt-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: quilttProfileId })
    })
      .then(res => res.json())
      .then((session) => setToken(session?.token))
  }, [quilttProfileId])

  return (
    <QuilttProvider token={token}>
      {children}
    </QuilttProvider>
  )
}
