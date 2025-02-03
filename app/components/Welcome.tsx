'use client'

import { useState, useEffect } from 'react'
import { useQuilttSession } from '@quiltt/react'

import { fetchGraphQL } from '../lib/quiltt'

export default function Welcome() {
  const { session } = useQuilttSession()
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (!session || profileData) return

    const fetchData = async () => {
      const response = await fetchGraphQL(session.token,
        `query {
          profile {
            id
            email
          }
        }`
      )

      setProfileData(response.data.profile)
    };

    fetchData();
  }, [session, profileData])

  return (
    <h1 className="text-4xl font-bold text-center py-4">
      Welcome, {profileData?.email}
    </h1>
  )
}
