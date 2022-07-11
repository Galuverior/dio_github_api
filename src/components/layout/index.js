import React from 'react'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <header>
        header
        {children}
      </header>
    </S.WrapperLayout>
  )
}

export default Layout
