import React from 'react'
import { useLocation} from 'react-router-dom'

function Account() {
  const params=useLocation();
  console.log(params)
  return (
    <div>
      Account
    </div>
  )
}

export default Account
