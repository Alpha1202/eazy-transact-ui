import React from 'react';
import { Link } from "@reach/router";
import './index.css';

const Index = () => {
    return (
        <div className="home-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="home-text">
                        <h2>Eazy Transact lTD</h2>
                        <p className="hidden-xs">Lorem maiores tempora at nisi consequatur. Fuga placeat laboriosam nisi quia!</p>
                        <Link to="/">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Index;

