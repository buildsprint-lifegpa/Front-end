import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import HabitCard from './HabitCard';

const UserHabits = () => {

  const id = localStorage.id

  const [user, setUser] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios.get(`/api/users/habits/${id}`)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }, [id]);

  useEffect(() => {
    axios.get(`/api/users/categories/${id}`)
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))
  }, [id]);

  if (!user || !categories)
    return (
      <div>Loading...</div>
    )

  return (
    <>
      <AppHeader
        userPhoto={user.userImgUrl}
        name={user.fullname}
      />
      <h1>UserHabits</h1>
      <HabitCard
        habits={user.habits}
        categories={categories}
      />
      <AppFooter />
    </>
  )

}

export default UserHabits



