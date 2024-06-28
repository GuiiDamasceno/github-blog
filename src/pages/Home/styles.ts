import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem;
`

export const HomeContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 864px;
  margin: 0 auto;
`

export const Cards = styled.div`
  margin-top: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin-top: 4.5rem;

  .search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    background: transparent;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    padding: 1rem 0.75rem;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
