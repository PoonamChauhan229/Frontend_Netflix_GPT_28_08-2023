import React, { useState } from 'react'
import { ProfileNavbar } from './ProfileNavbar'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const {username}=useParams()
    console.log(username)
  return (
    <div>
        <ProfileNavbar/>


    </div>
  )
}

export default Profile