import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectLinks = () => {
  return (
    <div class="collection">
        <NavLink to='/dashboard/issue_hub' className="collection-item">Issues</NavLink>
        <NavLink to='/dashboard/issue_add' className="collection-item">Add Issue</NavLink>
        <NavLink to='/dashboard/scheduled_issue' className="collection-item">Scheduled Issue</NavLink>
        <NavLink to='/dashboard/equipment' className="collection-item">Equipment</NavLink>
        <NavLink to='/dashboard/teacher_attendance' className="collection-item">Teacher Attendance</NavLink>
        <NavLink to='/dashboard/admin_visits' className="collection-item">Admin Visits</NavLink>
        <NavLink to='/dashboard/reporting' className="collection-item">Reporting</NavLink>
        <NavLink to='/dashboard/payment' className="collection-item">Payment</NavLink>
    </div>
  )
}

export default ProjectLinks
