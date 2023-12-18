import React from 'react'

function Profile() {
  const user={
    fullname:"Nguyễn Hoàng Việt",
  }
  
  return (
    <div className="profile">
      Profile {user.fullname} 
    </div>
  )
}

export default Profile
