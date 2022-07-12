import React, {createContext, useCallback, useState} from 'react'
import api from "../services/api";

export const GithubContext = createContext({
	loading: false,
	user: {},
	repositories: [],
	starred: []
})

const GithubProvider = ({children}) => {
	const [githubState, setGithubState] = useState({
		hasUser: false,
		loading: false,
		user: {
			id: undefined,
			avatar: undefined,
			login: undefined,
			name: undefined,
			htmlUrl: undefined,
			blog: undefined,
			company: undefined,
			location: undefined,
			followers: 0,
			following: 0,
			publicGists: 0,
			publicRepos: 0
		},
		repositories: [],
		starred: []
	})
	
	const getUser = (username) => {
		
		setGithubState((prevState) => ({
			...prevState,
			loading: !prevState.loading,
		}))
		api
			.get(`users/${username}`)
			.then(({data}) => {
				setGithubState((prevState) => ({
					...prevState,
					hasUser: true,
					user: {
						id: data.id,
						avatar: data.avatarUrl,
						login: data.login,
						name: data.name,
						htmlUrl: data.htmlUrl,
						blog: data.blog,
						company: data.company,
						location: data.location,
						followers: data.followers,
						following: data.following,
						publicGists: data.publicGists,
						publicRepos: data.publicRepos,
					},
				}))
			})
			.finally(() => {
				setGithubState((prevState) => ({
					...prevState,
					loading: !prevState.loading,
				}))
			})
	}
	
	const getUserRepos = (username) => {
		api.get(`users/${username}/repos`).then(({data}) => {
			setGithubState((prevState) => ({
				...prevState,
				repositories: data,
			}))
		})
	}
	
	const getUserStarred = (username) => {
		api.get(`users/${username}/starred`).then(({data}) => {
			setGithubState((prevState) => ({
				...prevState,
				starred: data,
			}))
		})
	}
	
	const ContextValue = {
		githubState,
		getUser: useCallback((username) => getUser(username), []),
		getUserRepos: useCallback((username) => getUserRepos(username), []),
		Starred: useCallback((username) => getUserStarred(username), []),
	}
	
	return (
		<GithubContext.Provider value={ContextValue}>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubProvider
