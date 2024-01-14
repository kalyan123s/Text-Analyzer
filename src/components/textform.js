import React, {useEffect, useState } from "react";

export default function TextForm(props) {
  const handleClickUppercase = () => {
    let uppercasetexts = texts.toUpperCase();
    setText(uppercasetexts);
  };
  const handleClickLowercase = () => {
    let lowercasetexts = texts.toLowerCase();
    setText(lowercasetexts);
  };
  const handleExtraSpaces = () => {
    let newtexts = texts.split(/[ ]+/);
    setText(newtexts.join(" "));
  };

  // const handleExtractEmail = () => {
  //   let ListOfMail= /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g; 
  //   let x=texts.match(ListOfMail);
  //     if(x===null){
  //       console.log("No any Email address found!")
  //     }
  //     else{
  //       setText(x);
  //     }
  // };

  const handleClickClear = () => {
    let newtexts = "";
    setText(newtexts);
  };
  const handleNoOfWords = () => {
    const trimmedText = texts ? texts.trim() : "";

    if (trimmedText.length === 0) {
      return 0;
    }

    const noOfWords = trimmedText.split(/\s+/).length;
    return noOfWords;
  };
  const handleNoOfCharactersNoSpaces = () => {
    const TotalCharlength = texts.length;
    const NoOfSpaces = (texts.match(/\s+/g) || []).length;
    const CharLength = TotalCharlength - NoOfSpaces;
    return CharLength;
  };

  const handleCountSentences = () => {
    return texts.split(/[.?!]/g).filter(Boolean).length;
  };

  const handleDownload = () => {
    // Create a new <a> (anchor) element
    const anchorTag = document.createElement("a");
    // Get the text content from the HTML element with the ID 'Yourtexts'
    const fileContent = new Blob([document.getElementById("myBox").value], {
      type: "text/plain;charset=utf-8",
    });
    // Set the href attribute of the anchor element to a URL representing the Blob
    anchorTag.href = URL.createObjectURL(fileContent);
    // Set the download attribute to specify the default file name
    anchorTag.download = "Texts Analyzer.txt";
    // Append the anchor element to the document body
    document.body.appendChild(anchorTag);
    // Programmatically trigger a click on the anchor element
    anchorTag.click();
  };
  
  const[Copybtntext, setBtnText]=useState("Copy")
  const handleCopy = () => {
    navigator.clipboard.writeText(texts);
    setBtnText("Copied!")
    setTimeout(()=>{
      setBtnText("Copy")
    },700)
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [texts, setText] = useState("Enter your texts here...");
  //   texts="new texts" //wrong way to change the texts
  //   setText("new texts") //correct way to change the texts
  return (
    <div className="container my-2 mx-3">
      <h2>{props.heading}</h2>
      <div>
        <textarea value={texts} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} className="form-control" id="myBox" rows="8" ></textarea>
      </div>
      <div className="container mt-3">
        <button className="  mx-2 my-1 btn btn-primary" onClick={handleClickUppercase}>
          Convert to Uppercase
        </button>
        <button className="  mx-2 my-1 btn btn-primary" onClick={handleClickLowercase}>
          Convert to Lowercase
        </button>
        <button className="  mx-2 my-1 btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Space(s)
        </button>
        <button className=" mx-2 my-1 btn btn-primary" onClick={handleExtractEmail}>
          Extract Email(s)
        </button>
        <button className=" ml-2 my-1  btn btn-primary" onClick={handleClickClear}>
          Clear Texts
        </button>
      </div>
      <div className="container mt-3">
        <h1>Your texts Summary!</h1>
        <p>
          <b>{handleNoOfWords()}</b> words{" "}
        </p>
        <p>
          <b>{texts.length}</b> characters(including Spaces)
        </p>
        <p>
          <b>{handleNoOfCharactersNoSpaces()}</b> characters(excluding Spaces)
        </p>
        <p>
          <b>{handleCountSentences()}</b> Sentences
        </p>
        <p>
          {" "}
          This texts would take{" "}
          <b>{(0.008 * texts.split(" ").length).toFixed(3)}</b> Minutes(
          <b>{(0.008 * texts.split(" ").length * 60).toFixed(2)}</b> seconds) to
          read.
        </p>
        <div className="my-2">
          <div>
            <h2>Preview</h2>
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleCopy}> {Copybtntext} </button> 
            <button type="submit" className="mx-2 btn btn-primary" onClick={handleDownload} > Download </button>
          </div>
        </div>
        <div className={` border border-1 border-${props.mode==='light'?'dark':'#F3E5AB'} pt-1 p-3  mx-20`}>
          <p className="fst-normal mx-20">{texts.length>0?texts:'Enter your texts to see preview...'}</p>
        </div>
      </div>
    </div>
  );
 }      
