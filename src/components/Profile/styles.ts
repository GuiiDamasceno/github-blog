import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  background: ${(props) => props.theme['base-profile']};

  height: 212px;

  border-radius: 10px;
  padding: 2rem;
  margin-top: -5rem;
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
      font-weight: bold;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;

      margin-top: 0.5rem;
    }
  }

  .infos {
    display: flex;
    gap: 1.5rem;

    .github-user,
    .workplace,
    .followers {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;

      i {
        color: ${(props) => props.theme['base-label']};
      }
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
    position: absolute;
    top: 0.5rem;
    right: 2rem;

    border-bottom: 1px solid transparent;

    transition: all 0.3s;

    &:hover {
      border-bottom-color: ${(props) => props.theme.blue};
    }
  }
`
