import React, {useEffect} from 'react'
import "./DrumMachine.css"
import Heater_1 from "../resources/Heater-1.mp3"
import Heater_2 from "../resources/Heater-2.mp3"
import Heater_3 from "../resources/Heater-3.mp3"
import Heater_4 from "../resources/Heater-4.mp3"
import Clap from "../resources/Clap.mp3"
import Closed_HH from "../resources/Closed-HH.mp3"
import Kick_n_hat from "../resources/Kick_n_Hat.mp3"
import Kick from "../resources/Kick.mp3"
import Open_HH from "../resources/Open-HH.mp3"


const audioRefs = Array.from({ length: 9 }, () => React.createRef());

const DrumMachine = () => {
  const handleClick = (index) => {
    if (audioRefs[index].current) {
      audioRefs[index].current.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyToDrumMap = {
        Q: 0, // Index of Heater_1
        W: 1, // Index of Heater_2
        E: 2, // Index of Heater_3
        A: 3, // Index of Heater_4
        S: 4, // Index of Clap
        D: 5, // Index of Open-HH
        Z: 6, // Index of Kick-n-Hat
        X: 7, // Index of Kick
        C: 8, // Index of Closed-HH
      };

      const key = e.key.toUpperCase();

      if (keyToDrumMap[key] !== undefined) {
        if (audioRefs[keyToDrumMap[key]].current) {
          audioRefs[keyToDrumMap[key]].current.play();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="playArea">
    <div className="drum-machine">
      <div className="display">Display Area</div>
      <div className="drum-pads">
        {audioRefs.map((audioRef, index) => (
          <div
            key={index}
            className="drum-pad"
            id={["Heater_1", "Heater_2", "Heater_3", "Heater_4", "Clap", "Open-HH", "Kick-n-Hat", "Kick", "Closed-HH"][index]}
            onClick={() => handleClick(index)}
          >
            {["Q", "W", "E", "A", "S", "D", "Z", "X", "C"][index]}
            <audio src={[Heater_1, Heater_2, Heater_3, Heater_4, Clap, Open_HH, Kick_n_hat, Kick, Closed_HH][index]} className="clip" ref={audioRef}></audio>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DrumMachine;