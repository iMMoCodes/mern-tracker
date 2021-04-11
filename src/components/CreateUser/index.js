import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
	const [users, setUsers] = useState({
		username: '',
	})

	const changeUsername = (e) => {
		setUsers({ username: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(users)

		axios.post('http://localhost:5000/users/add', users).then((res) => console.log(res.data))
		setUsers({ username: '' })
	}

	return (
		<div>
			<h3>Create New User</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<input type='text' required value={users.username} onChange={changeUsername} />
				</div>
				<div className='form-group'>
					<input type='submit' value='Create User' className='btn btn-primary' />
				</div>
			</form>
		</div>
	)
}

export default CreateUser
