import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import HabitCard from './HabitCard';

const UserHabits = () => {

  const id = localStorage.id

  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`/api/users/habits/${id}`)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  if (!user)
    return (
      <div>Loading...</div>
    )

  console.log(user)

  return (
    <>
      <AppHeader
        userPhoto={user.userImgUrl}
        name={user.fullname}
      />
      <h1>UserHabits</h1>
      <HabitCard />
      <AppFooter />
    </>
  )

}

export default UserHabits



