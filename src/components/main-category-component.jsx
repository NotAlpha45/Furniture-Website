import React from 'react'

export default function MainCategoryComponent() {
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Electronics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sofas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Chairs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">Tables</a>
                </li>
            </ul>
        </>
    )
}
