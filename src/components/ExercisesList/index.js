import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Exercise from '../Exercise/'

const ExerciseList = () => {
	const [exercises, setExercises] = useState([])

	useEffect(() => {
		axios.get('http://localhost:5000/exercises/')
			.then((response) => {
				setExercises(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const deleteExercise = (id) => {
		axios.delete(`http://localhost:5000/exercises/${id}`).then((res) => console.log(res.data))
		setExercises(exercises.filter((el) => el._id !== id))
	}

	const exerciseList = () => {
		return exercises.map((currentexercise) => {
			return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />
		})
	}

	return (
		<div>
			<h3>Logged Exercises</h3>
			<table className='table'>
				<thead className='thead-light'>
					<tr>
						<th>Username</th>
						<th>Description</th>
						<th>Duration</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{exerciseList()}</tbody>
			</table>
		</div>
	)
}

export default ExerciseList
