
import React from 'react'
import AdminLayout from '../../HOC/AdminLayout';

const Dashboard = (props) => {
    return (
        <AdminLayout title="My Dashboard">
            <div className="user_dashboard">
                <div>
                    This is your dashboard
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard
