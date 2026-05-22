import { useState, useEffect } from "react";
import './progress.scss'

export const ProgressBar = ({ progress }) => {
    const [animatedBar, setAnimatedBar] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAnimatedBar(progress);
        }, 100);
    }, [progress]);

    return (
        <div className="progress-container">
            <h2>Progress Bar</h2>
            <div className="outer" >
                <div
                    className="inner"
                    style={{ transform: `translateX(${animatedBar - 100}%)` }}
                    role="progressbar"
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={animatedBar}
                >
                    {progress} %
                </div>
            </div>
        </div>
    );
};
