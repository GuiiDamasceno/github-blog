import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  max-width: 416px;

  height: 260px;

  border: 2px solid transparent;

  transition: all 0.3s;

  text-decoration: none;
  color: ${(props) => props.theme['base-span']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      font-weight: bold;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      white-space: nowrap;
      line-height: 1.6;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;

    margin-top: 1.25rem;
  }
`
