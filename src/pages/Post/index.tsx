import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import {
  PostCardContent,
  PostContainer,
  PostContent,
  PostDetails,
  PostInfos,
} from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'

export interface PostDetails {
  title: string
  created_at: string
  comments: string
  body: string
  html_url: string
}

export function Post() {
  const [posts, setPosts] = useState<PostDetails>({} as PostDetails)
  const [userName, setUserName] = useState('')
  const [formattedDate, setFormattedDate] = useState('')
  const { id } = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function fetchPost() {
    const response = await api.get(
      `/repos/GuiiDamasceno/github-blog/issues/${id}`,
    )
    setUserName(response.data.user.login)
    setPosts(response.data)

    const formattedDate = formatDistanceToNow(
      new Date(response.data.created_at),
      {
        locale: ptBR,
        addSuffix: true,
      },
    )

    setFormattedDate(formattedDate)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <Header />

      <PostContent>
        <PostCardContent>
          <div className="header">
            <button onClick={handleBack}>
              <i className="fa-solid fa-chevron-left"></i>
              VOLTAR
            </button>
            <a href={posts.html_url} target="_blank" rel="noreferrer">
              VER NO GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <h1>{posts.title}</h1>
          <PostInfos>
            <div className="github-user">
              <i className="fa-brands fa-github" />
              <span>{userName}</span>
            </div>
            <div className="calendar">
              <i className="fa-solid fa-calendar-day" />
              <span>{formattedDate}</span>
            </div>
            <div className="comments">
              <i className="fa-solid fa-comment" />
              <span>{posts.comments} comentários</span>
            </div>
          </PostInfos>
        </PostCardContent>

        <PostDetails>
          <Markdown remarkPlugins={[remarkGfm]}>{posts.body}</Markdown>
        </PostDetails>
      </PostContent>
    </PostContainer>
  )
}
