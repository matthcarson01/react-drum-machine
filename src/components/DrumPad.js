
const DrumPad = ({ letter, sound }) => {

    const playAudio = () => {
        const audioEl = document.getElementsByClassName(`audio-element-${letter}`)[0];
        audioEl.play();
    }

    return (
        <div id={letter} className="drum-pad" onClick={playAudio}>
            <audio className={`audio-element-${letter}`}>
                <source src={sound}></source>
            </audio>
            {letter}
        </div>
    );
}

export default DrumPad;