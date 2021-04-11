import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CreateExercise = () => {
	const [state, setState] = useState({
		username: '',
		description: '',
		duration: 0,
		date: new Date(),
		users: [],
	})

	useEffect(() => {
		axios.get('http://localhost:5000/users').then((response) => {
			if (response.data.length > 0) {
				setState({ ...state, users: response.data.map((user) => user.username), username: response.data[0].username })
			}
		})
	}, [])

	const changeUsername = (e) => {
		setState({ ...state, username: e.target.value })
	}

	const changeDescription = (e) => {
		setState({ ...state, description: e.target.value })
	}

	const changeDuration = (e) => {
		setState({ ...state, duration: e.target.value })
	}

	const changeDate = (date) => {
		setState({ ...state, date: date })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const exercise = {
			...state,
		}
		console.log(`exercise`, exercise)

		axios.post('http://localhost:5000/exercises/add', exercise).then((res) => console.log(res.data))

		window.location = '/'
	}

	return (
		<div>
			<h3>Create New Exercise</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<select required className='form-control' value={state.username} onChange={changeUsername}>
						{state.users.map((user) => {
							return (
								<option key={user} value={user}>
									{user}
								</option>
							)
						})}
					</select>
				</div>
				<div className='form-group'>
					<label>Description: </label>
					<input
						type='text'
						required
						className='form-control'
						value={state.description}
						onChange={changeDescription}
					/>
				</div>
				<div className='form-group'>
					<label>Duration: (in minutes): </label>
					<input type='text' className='form-control' value={state.duration} onChange={changeDuration} />
				</div>
				<div className='form-group'>
					<label>Date: </label>
					<div>
						<DatePicker selected={state.date} onChange={changeDate} />
					</div>
				</div>
				<div className='form-group'>
					<input type='submit' value='Create Exercise' className='btn btn-primary' />
				</div>
			</form>
		</div>
	)
}

export default CreateExercise
