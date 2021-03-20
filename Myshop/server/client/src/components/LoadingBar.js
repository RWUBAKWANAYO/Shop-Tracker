import React, { Component } from 'react'

export class LoaderBar extends Component {
    render() {
        return (
            <div className="loader-container">
                <h1><span>My</span>Shop</h1>
                <div className="loader"></div>
            </div>
        )
    }
}

export default LoaderBar


