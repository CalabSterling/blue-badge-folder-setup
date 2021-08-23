import React from 'react'; 

const Resources = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>React Resources</h1>
                <p>Below are some of the resources that we used throughout this app. Note: you'll have one challenge where you will be asked to make this page better.</p>
                <ul>
                    <li>
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                            The Orfficial Docs
                        </a>
                    </li>
                    <li>
                        <a href="https://reacttraining.com/react-router" target="_blank" rel="noreferrer">
                            React Router Dom
                        </a>
                    </li>
                    <li>
                        <a href="https://www.plluralsight.com/course/react-js-getting-started" target="_blank" rel="noreferrer">
                            Samer Funa's Pluralsight Course for the GitHun API Starter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resources;