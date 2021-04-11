import React, { useState } from 'react'

const CreateUser = () => {
	const [username, setUsername] = useState('')

	const changeUsername = (e) => {
		setUsername(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(username)
		setUsername('')
	}

	return (
		<div>
			<h3>Create New User</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<input type='text' required value={username} onChange={changeUsername} />
				</div>
				<div className='form-group'>
					<input type='submit' value='Create User' className='btn btn-primary' />
				</div>
			</form>
		</div>
	)
}

export default CreateUser
