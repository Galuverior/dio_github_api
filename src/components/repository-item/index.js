import React from 'react'
import * as S from './styled'
import {WrapperFullname} from "./styled";

const RepositoryItem = ({name, linkToRepo, fullName}) => {
	return (
		<S.WrapperItem>
			<S.WrapperTitle>{name}</S.WrapperTitle>
			<S.WrapperFullName>full name:</S.WrapperFullName>
			<S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
				{fullName}
			</S.WrapperLink>
		</S.WrapperItem>
	)
}

export default RepositoryItem
