import styled from 'styled-components'

export const WrapperHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem;
  
  input {
	border: 0.0625rem solid #ccc;
	border-radius: 0.5rem;
	width: 100%;
	height: 2.5rem;
	padding: 0.5rem;
	font-weight: 500;
  }
  
  button {
	background-color: #225ed8;
	padding: 0.5rem 1rem;
	margin: 0 1rem;
	border-radius: 0.5rem;
	font-weight: bold;
	font-size: 1rem;
	
	&:hover {
	  background-color: #225ed9;
	  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
	}
	
	span {
	  font-weight: bold;
	  color: white;
	}
  }
`
