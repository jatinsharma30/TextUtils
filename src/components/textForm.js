import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
    const [text, setText] = useState(''); 

    const handleOnchange=(event)=>{
        // console.log("onchange event")''
        setText(event.target.value);
    }

    const changeToUpperCase=()=> {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("changed to upperCase","","success");
    }

    const changeToLowerCase=()=> {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("changed to lowerCase","","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","","success");
    }

    const clearText=()=> {
        setText('');
        props.showAlert("Text cleared","","danger");
    }

    const changeToTitle=()=> {
        let newText=text;
        for (let i = 0; i < newText.length; i++) {
            if (newText[i]==" " & i!=newText.length-1){
                newText = newText.substring(0, i+1) + newText[i+1].toUpperCase() + newText.substring(i+1 + 1);
                // console.log(newText[i+1])
            }
            if(i==0){
                newText = newText.substring(0, i) + newText[i].toUpperCase() + newText.substring(i + 1);
                // console.log(newText[i]);
            }
        }
        setText(newText);
        props.showAlert("changed to Title","","success");
    }

    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={changeToUpperCase}>change to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>change to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={changeToTitle}>change to title</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
                <button className="btn btn-danger mx-2" onClick={clearText}>clear</button>
            </div>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
                <p> <b>{0.008 * (text.split(" ").length-1)}</b> Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}