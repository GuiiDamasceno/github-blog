import { styled } from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`

export const PostCardContent = styled.div`
  width: 100vw;
  max-width: 864px;
  background: ${(props) => props.theme['base-profile']};

  height: 186px;

  border-radius: 10px;
  padding: 2rem;
  margin-top: -5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
    margin-top: 2rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: transparent;
      border: none;
      font-size: 0.75rem;
      font-weight: bold;

      color: ${(props) => props.theme.blue};
      cursor: pointer;

      border-bottom: 1px solid transparent;

      transition: all 0.3s;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      font-size: 0.75rem;
      font-weight: bold;

      color: ${(props) => props.theme.blue};
      text-decoration: none;

      border-bottom: 1px solid transparent;

      transition: all 0.3s;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }
`

export const PostInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 0.5rem;

  .github-user,
  .calendar,
  .comments {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;

    i {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 864px;

  padding: 0 1rem;

  margin-top: 4rem;

  white-space: pre-wrap;
  overflow: hidden;

  a {
    color: ${(props) => props.theme.blue};
  }

  img {
    max-width: 100%;
  }
`
