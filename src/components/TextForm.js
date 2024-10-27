import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowerClick = () => {
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClear = () => {
        const newText = ' ';
        setText(newText);
        props.showAlert("Cleared the text", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Uppercase was clicked");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the text", "success");
    }

    const handleExtraSpaces = () => {
        var text2 = text.trim().split(/[ ]+/);
        var text3 = text2.join(" ");
        var newText = text3.split(/\n+/)
        setText(newText.join('\n'));
        props.showAlert("Cleared extra spaces & lines", "success")
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#252627', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="textbox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
            </div>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary is:</h2>
                <p>Number of words:{text.trim().length === 0 ? 0 : text.trim().split(" ").length}</p>
                <p>Number of Characters: {text.length}</p>
                <p>Time required ot read:{(text.split(" ").length - 1) * 0.009} Minutes.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
