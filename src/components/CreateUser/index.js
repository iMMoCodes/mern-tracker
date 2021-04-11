import React, { useState } from 'react'

const CreateUser = () => {
	const [state, setState] = useState({
		username: '',
	})

	return (
		<div>
			<h1>You are on Create User component</h1>
		</div>
	)
}

export default CreateUser
