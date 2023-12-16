import { faAngleRight, faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SideBarItem = ({href, name, icon}) => {
  return (
    <li className={`Home_sidebar-sidebar-li hover_${name}`}>
              <a href={href}>
                <div>
                  <FontAwesomeIcon icon={icon} fontSize={14} />
                  <h5>{name}</h5>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
    </li>
  )
}

export default SideBarItem