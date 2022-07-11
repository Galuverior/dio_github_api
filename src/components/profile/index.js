import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/14797614?v=4"
        alt="imagem do perfil"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Eduardo Fragoso</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/Galuverior"
              target="_blank"
              rel="noreferrer"
            >
              Galuverior
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>2</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>8</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
