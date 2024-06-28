import { CardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CardInfo } from '../..'

interface CardProps {
  post: CardInfo
}

export function Card({ post }: CardProps) {
  const { created_at: createdAt, body: description, title, number } = post
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <CardContainer to={`post/${number}`}>
      <div className="header">
        <h2>{title}</h2>
        <span>{formattedDate}</span>
      </div>
      <p>{description}</p>
    </CardContainer>
  )
}
