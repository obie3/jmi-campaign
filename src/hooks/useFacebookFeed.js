import { useState, useEffect } from 'react'

const FB_API = 'https://graph.facebook.com/v19.0'

export function useFacebookFeed(limit = 6) {
  const pageId = import.meta.env.VITE_FB_PAGE_ID
  const token  = import.meta.env.VITE_FB_ACCESS_TOKEN

  const [posts,   setPosts]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    if (!pageId || !token) {
      setLoading(false)
      setError('not_configured')
      return
    }

    const fields = 'message,story,full_picture,created_time,permalink_url,attachments'
    const url = `${FB_API}/${pageId}/posts?fields=${fields}&limit=${limit}&access_token=${token}`

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error.message)
        setPosts(data.data || [])
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [pageId, token, limit])

  return { posts, loading, error, configured: !!(pageId && token) }
}
