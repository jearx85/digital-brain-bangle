import './Home.css';

// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import React from 'react';

import { LandingPage } from '../../app-entry/pages/LandingPage';

export default function Home() {
  return (
    <>
      <div className="container mt-10">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/home" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/home" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="micard card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/home" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <LandingPage />
      </div>
    </>
  );
}
