import { useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Card } from './components/Card'

import { Cards, HomeContainer, HomeContent, SearchContainer } from './styles'
import { api } from '../../lib/axios'

export interface CardInfo {
  title: string
  body: string
  created_at: string
  number: string
}
export function Home() {
  const [posts, setPosts] = useState<CardInfo[]>([] as CardInfo[])
  const [count, setCount] = useState(0)

  const fetchPosts = useCallback(async (query: string | null) => {
    const response = await api.get(
      `search/issues?q=repo:GuiiDamasceno/github-blog%20is:issue%20${query}`,
    )
    setPosts(response.data.items)
    setCount(response.data.total_count)
  }, [])

  useEffect(() => {
    fetchPosts('')
  }, [fetchPosts])

  console.log(posts)

  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <Profile />

        <SearchContainer>
          <div className="search-header">
            <h1>Publicações</h1>
            <p>{count} publicações</p>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onKeyDown={(e) =>
              e.key === 'Enter' && fetchPosts(e.currentTarget.value)
            }
            onBlur={(e) => fetchPosts(e.currentTarget.value)}
          />
        </SearchContainer>

        <Cards>
          {posts &&
            posts.map((post) => (
              <Card key={`${post.title}-${post.number}`} post={post} />
            ))}
        </Cards>
      </HomeContent>
    </HomeContainer>
  )
}
