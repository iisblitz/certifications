import React, { useState, useEffect } from 'react';
import beep from "../resources/beep.mp3"
import './Pomodoro.css'
const Pomodoro = () => {
    const [sessionLength, setSessionLength] = useState(25 * 60);
    const [breakLength, setBreakLength] = useState(5 * 60);
    const [timer, setTimer] = useState(sessionLength);
    const [isActive, setIsActive] = useState(false);
    const [isSession, setIsSession] = useState(true);

    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                if (timer > 0) {
                    setTimer(prevTimer => prevTimer - 1);
                } else {
                    clearInterval(interval);
                    const audio = new Audio(beep)
                    audio.play()
                    // Toggle between session and break
                    setIsSession(isSession => !isSession);
                    setTimer(isSession ? breakLength : sessionLength);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer, sessionLength, breakLength, isSession]);
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsSession(true);
        setTimer(sessionLength);
        setBreakLength(5*60);
        setSessionLength(25*60)
    };

    const handleClickSession=(e)=>{
        let value = e.target.innerHTML
        if(value === "-"){setSessionLength(Math.max(60, sessionLength - 60))}else{setSessionLength(Math.min(3600, sessionLength + 60))}
        setTimer(sessionLength)
    }
    const handleClickBreak=(e)=>{
        let value = e.target.innerHTML
        if(value === "-"){setBreakLength(Math.max(60, breakLength - 60))}else{setBreakLength(Math.min(3600, breakLength + 60))}
    }

    return (
        <section className="section">
            <h1>Pomodoro Timer</h1>
          
            <div className="row">  
            <div className="session">
                <label id="session-label">Session Length</label>
                <div className="miniRow">
                    <button id="session-decrement" onClick={(e) => handleClickSession(e)}>-</button>
                    <p id="session-length">{sessionLength / 60} minutes</p>
                    <button id="session-increment" onClick={(e) => handleClickSession(e)}>+</button>
                </div>
            </div>

            <div className="break">
                <label id="break-label">Break Length</label>
                <div className="miniRow">
                    <button id="break-decrement"  onClick={(e) => handleClickBreak(e)}>-</button>
                    <p id="break-length">{breakLength / 60} minutes</p>
                    <button id="session-increment" onClick={(e) => handleClickBreak(e)}>+</button>
                </div>
            </div>
            </div>

            <p id="time-left" className="timer">{formatTime(timer)}</p>
            <div className="row">
            <button id="start_stop" onClick={handleStart}>Start</button>
            <button id="start_stop" onClick={handleStop}>Stop</button>
            <button id="reset" onClick={handleReset}>Reset</button>
            </div>
            <p id="timer-label">{isSession ? 'Session' : 'Break'}</p>
            
        </section>
    );
};

export default Pomodoro;
