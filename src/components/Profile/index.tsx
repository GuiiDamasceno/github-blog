import { useEffect, useState } from 'react'
import { ProfileContainer, ProfileContent } from './styles'
import { api } from '../../lib/axios'

interface UserInfo {
  name: string
  avatar_url: string
  html_url: string
  followers: number
  bio: string
  company: string
  login: string
}

export function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfo>()

  async function fetchUserInfo() {
    try {
      await api.get<UserInfo>('/users/GuiiDamasceno').then((response) => {
        const userDetails = {
          name: response.data.name,
          avatar_url: response.data.avatar_url,
          html_url: response.data.html_url,
          followers: response.data.followers,
          bio: response.data.bio,
          company: response.data.company,
          login: response.data.login,
        }
        setUserInfo(userDetails)
      })
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={userInfo?.avatar_url} alt="" />
        <div className="details">
          <div className="description">
            <h1>{userInfo?.name}</h1>
            <p>{userInfo?.bio}</p>
          </div>
          <div className="infos">
            <div className="github-user">
              <i className="fa-brands fa-github" />
              <span>{userInfo?.login}</span>
            </div>
            <div className="workplace">
              <i className="fa-solid fa-building" />
              <span>{userInfo?.company}</span>
            </div>
            <div className="followers">
              <i className="fa-solid fa-user-group" />
              <span>{userInfo?.followers} seguidores</span>
            </div>
          </div>
          <a
            href="https://github.com/GuiiDamasceno"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
