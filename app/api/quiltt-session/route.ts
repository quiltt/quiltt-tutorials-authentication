import { NextResponse } from 'next/server'

export async function POST(req) {
  const requestBody = await req.json()

  const data = await fetch('https://auth.quiltt.io/v1/users/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.QUILTT_API_KEY_SECRET}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  const session = await data.json()

  return NextResponse.json(session)
}
