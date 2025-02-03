export async function fetchGraphQL(token, query, variables) {
  const res = await fetch('https://api.quiltt.io/v1/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })

  if (!res.ok) throw new Error('GraphQL request failed')

  return res.json()
}
