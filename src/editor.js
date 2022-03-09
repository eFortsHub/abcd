const editor = document.getElementById("editor");



editor.addEventListener("keydown", (e) => {


    if (!e.ctrlKey && !e.altKey) {
        var keyText;

        switch (e.code) {
            case "KeyQ":
                keyText = "a";
                break;
            case "KeyW":
                keyText = "b";
                break;
            case "KeyE":
                keyText = "c";
                break;
            case "KeyR":
                keyText = "d";
                break;
            case "KeyT":
                keyText = "e";
                break;
            case "KeyY":
                keyText = "f";
                break;
            case "KeyU":
                keyText = "g";
                break;
            case "KeyI":
                keyText = "h";
                break;
            case "KeyO":
                keyText = "i";
                break;
            case "KeyP":
                keyText = "j";
                break;
            case "KeyA":
                keyText = "k";
                break;
            case "KeyS":
                keyText = "l";
                break;
            case "KeyD":
                keyText = "m";
                break;
            case "KeyF":
                keyText = "n";
                break;
            case "KeyG":
                keyText = "o";
                break;
            case "KeyH":
                keyText = "p";
                break;
            case "KeyJ":
                keyText = "q";
                break;
            case "KeyK":
                keyText = "r";
                break;
            case "KeyL":
                keyText = "s";
                break;
            case "KeyZ":
                keyText = "t";
                break;
            case "KeyX":
                keyText = "u";
                break;
            case "KeyC":
                keyText = "v";
                break;
            case "KeyV":
                keyText = "w";
                break;
            case "KeyB":
                keyText = "x";
                break;
            case "KeyN":
                keyText = "y";
                break;
            case "KeyM":
                keyText = "z";
                break;

        }


        if (e.shiftKey) {
            keyText = keyText.toUpperCase();
        }
    } else {
        console.log("ctrl or alt key pressed")
    }

    if(keyText!=null){
    document.execCommand("insertText", false,keyText);
    e.preventDefault();
    }



});
