'use client'

import { QuilttButton } from '@quiltt/react'

import Welcome from './components/Welcome'

const CONNECTOR_ID = 'rbemt34osd'

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center sm:items-start">

        <Welcome />

        <QuilttButton connectorId={CONNECTOR_ID} className="border p-2">
          Launch Connector!
        </QuilttButton>
      </main>
    </div>
  )
}
