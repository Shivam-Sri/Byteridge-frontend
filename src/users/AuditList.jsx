import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';
import { useState } from 'react';

export { AuditList };

function AuditList() {
    const users = useSelector(x => x.users.auditList);

    console.log(JSON.stringify(users) + ' inside audit list');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAuditList());
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {/* <Link to="add" className="btn btn-sm btn-success mb-2">Add User</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>First Name</th>
                        <th style={{ width: '20%' }}>Last Name</th>
                        <th style={{ width: '20%' }}>Username</th>
                        <th style={{ width: '15%' }}>Logged In</th>
                        <th style={{ width: '15%' }}>Logged Out</th>
                        <th style={{ width: '10%' }}>Client IP</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.value?.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td> {user.lastLogin}</td>
                            <td> {user.lastLogout}</td>
                            <td> {user.clientIP}</td>
                        </tr>
                    )}
                    {users?.loading &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
