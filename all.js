const userStyles = `

.CodeMirror-code div { font-size:15px !important; font-family: "Fira Code" !important; }


.v6e7bf89247301200ba13a5554ee490e3 [role="editor-container"][data-readonly="true"] .cm-s-snc.CodeMirror {
	background-color: rgb(70,70,70) !important;
}

.cm-s-snc.CodeMirror, .cm-s-snc .CodeMirror-gutters {
background-color: #282a36 !important;
color: #f8f8f2 !important;
border: none;
font-size:15px !important; 
font-family: "Fira Code" !important;
}
.cm-s-snc .CodeMirror-gutters { color: #282a36  !important}
.cm-s-snc .CodeMirror-cursor { border-left: solid thin #f8f8f0 !important }
.cm-s-snc .CodeMirror-linenumber { color: #6D8A88 !important }
.cm-s-snc .CodeMirror-selected { background: rgba(255, 255, 255, 0.10) !important}
.cm-s-snc .CodeMirror-line::selection, .cm-s-snc .CodeMirror-line > span::selection, .cm-s-snc .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10) !important}
.cm-s-snc .CodeMirror-line::-moz-selection, .cm-s-snc .CodeMirror-line > span::-moz-selection, .cm-s-snc .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10)  !important}
.cm-s-snc span.cm-comment { color: #6272a4  !important}
.cm-s-snc span.cm-string, .cm-s-snc span.cm-string-2 { color: #f1fa8c  !important}
.cm-s-snc span.cm-number { color: #bd93f9 !important }
.cm-s-snc span.cm-variable { color: #50fa7b !important }
.cm-s-snc span.cm-variable-2 { color: white  !important}
.cm-s-snc span.cm-def { color: #50fa7b  !important}
.cm-s-snc span.cm-operator { color: #ff79c6  !important}
.cm-s-snc span.cm-keyword { color: #ff79c6 !important }
.cm-s-snc span.cm-atom { color: #bd93f9 !important }
.cm-s-snc span.cm-meta { color: #f8f8f2  !important}
.cm-s-snc span.cm-tag { color: #ff79c6  !important}
.cm-s-snc span.cm-attribute { color: #50fa7b  !important}
.cm-s-snc span.cm-qualifier { color: #50fa7b !important }
.cm-s-snc span.cm-property { color: #66d9ef  !important}
.cm-s-snc span.cm-builtin { color: #50fa7b  !important}
.cm-s-snc span.cm-variable-3, .cm-s-snc span.cm-type { color: #ffb86c  !important}
.cm-s-snc .CodeMirror-activeline-background { background: rgba(255,255,255,0.1)  !important}
.cm-s-snc .CodeMirror-matchingbracket { text-decoration: underline !important; color: white !important; }

.CodeMirror-merge div { height: 100vh !important; }





.CodeMirror pre.CodeMirror-line, .CodeMirror pre.CodeMirror-line-like {
	font-size: 15px !important; 
	font-family: "Fira Code" !important;
}

.cm-s-default.CodeMirror, .cm-s-default .CodeMirror-gutters {
background-color: #282a36 !important;
color: #f8f8f2 !important;
border: none;
font-size:15px !important; 
font-family: "Fira Code" !important;
}
.cm-s-default .CodeMirror-gutters { color: #282a36  !important}
.cm-s-default .CodeMirror-cursor { border-left: solid thin #f8f8f0 !important }
.cm-s-default .CodeMirror-linenumber { color: #6D8A88 !important }
.cm-s-default .CodeMirror-selected { background: rgba(255, 255, 255, 0.10) !important}
.cm-s-default .CodeMirror-line::selection, .cm-s-default .CodeMirror-line > span::selection, .cm-s-default .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10) !important}
.cm-s-default .CodeMirror-line::-moz-selection, .cm-s-default .CodeMirror-line > span::-moz-selection, .cm-s-default .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10)  !important}
.cm-s-default span.cm-comment { color: #6272a4  !important}
.cm-s-default span.cm-string, .cm-s-default span.cm-string-2 { color: #f1fa8c  !important}
.cm-s-default span.cm-number { color: #bd93f9 !important }
.cm-s-default span.cm-variable { color: #50fa7b !important }
.cm-s-default span.cm-variable-2 { color: white  !important}
.cm-s-default span.cm-def { color: #50fa7b  !important}
.cm-s-default span.cm-operator { color: #ff79c6  !important}
.cm-s-default span.cm-keyword { color: #ff79c6 !important }
.cm-s-default span.cm-atom { color: #bd93f9 !important }
.cm-s-default span.cm-meta { color: #f8f8f2  !important}
.cm-s-default span.cm-tag { color: #ff79c6  !important}
.cm-s-default span.cm-attribute { color: #50fa7b  !important}
.cm-s-default span.cm-qualifier { color: #50fa7b !important }
.cm-s-default span.cm-property { color: #66d9ef  !important}
.cm-s-default span.cm-builtin { color: #50fa7b  !important}
.cm-s-default span.cm-variable-3, .cm-s-default span.cm-type { color: #ffb86c  !important}
.cm-s-default .CodeMirror-activeline-background { background: rgba(255,255,255,0.1)  !important}
.cm-s-default .CodeMirror-matchingbracket { text-decoration: underline !important; color: white !important; }

.CodeMirror-merge div { height: 100vh !important; }


`;



let debug = false;
let cssInjectRetryCount = 0;
let cssInjectRetryLimit = 1000;

class CSSInject {
	styles = "";
	href = "";
	id = 0;
	iframe = undefined;
	form_id = "";
	contentDocument = undefined;
	intervals = [];
	constructor(id){
		this.id = id;
		this.href = window.location.href;
		this.styles = userStyles; 
		var css = document.createElement('style'); 
	    css.type = 'text/css'; 
	
	    if (css.styleSheet)  
	        css.styleSheet.cssText = this.styles; 
	    else  
	        css.appendChild(document.createTextNode(this.styles)); 
	    this.css = css;
	}

	log(msg){
		if(debug)
			console.log("CSSInject", msg);
	}
	
	setStylesIframe(){
		
	    /* Append style to the tag name */ 
	    this.contentDocument.getElementsByTagName("head")[0].appendChild(this.css); 
	    this.log("Styles set")
	}
	
	clearIntervals(){
		for(var i of this.intervals){
			clearInterval(i);
		}
	}
	
	
	setIframe(element){
		if(element){
			this.iframe = element;
			this.log("New iframe set");
			var doc;
			if(element.document)
				doc = element.document;
			else if (element.contentDocument)
				doc = element.contentDocument;
			this.log(doc);
			if(typeof doc == "undefined"){
				throw new Error("contentDocument undefined");
			}
			if(doc.querySelector("title") == null){
				throw new Error("Page not loaded");
			}
			
			this.contentDocument = doc;
			this.log("contentDocument set");
			
			this.form_id = this.iframe.g_form.getUniqueValue();
			this.log("Form id set as " + this.form_id);
			
			return true;
		} else {
			throw new Error("Element not passed");
		}
	}
}


var inj = new CSSInject(Date.now());

if(window.location.href.includes("/now/nav/ui/classic")){
	loadStyles();
} else {
	prodFunctions()
}


function loadStyles(){
	
	var int = setInterval(() => {
		// cssInjectRetryCount++;
		// if(cssInjectRetryCount > cssInjectRetryLimit){
		// 	if(debug){
		// 		console.warn(`Abandoning setting styles via injection after ${cssInjectRetryLimit} attempts`)
		// 	}
		// 	clearInterval(int);
		// }
		inj.intervals.push(int);
		let success = false;
		try{
			inj.log("Trying to fetch iframe");
			success = inj.setIframe(window.gsft_main);
		} catch(e){
			if(debug)
				console.error(e);
		}
		if(success){
			clearInterval(int);
			inj.log("Setting styles")
			inj.setStylesIframe();
			prodIframeFunctions();
			monitor();
		}
	}, 50)
}

function monitor() {
		window.gsft_main.addEventListener("unload", () => {
			inj.iframe = undefined;
			inj.contentDocument = undefined;
			inj.form_id = "";
			inj.log("Iframe unloaded, loading again");
			loadStyles();
		})
}


// ==UserScript==
// @name        Code Editor patch - playcanvas.com
// @namespace   yaustar
// @match       https://playcanvas.com/editor/code/*
// @grant       none
// @version     1.0
// @author      @yaustar
// @description 15/11/2021, 17:46:17
// ==/UserScript==


(function () {
    // Load a chosen theme
    var loadTheme = function () {
        // Taken from: https://github.com/brijeshb42/monaco-themes/tree/master/themes
        var data = dracula

        gsft_main.monaco.editor.defineTheme('dracula', data);
        gsft_main.monaco.editor.setTheme('dracula');
    };



    // Check if Monaco exists
    var codeEditorPoll = setInterval(function () {
    	// console.log('polling for monaco');
        if (gsft_main.monaco) {
        	console.log('monaco found')
            loadTheme();
            clearInterval(codeEditorPoll);
        }
    }, 500);

})();







var dracula = {
  "base": "vs-dark",
  "inherit": true,
  "rules": [
    {
      "background": "282a36",
      "token": ""
    },
    {
      "foreground": "6272a4",
      "token": "comment"
    },
    {
      "foreground": "f1fa8c",
      "token": "string"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.numeric"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.language"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.character"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.other"
    },
    {
      "foreground": "ffb86c",
      "token": "variable.other.readwrite.instance"
    },
    {
      "foreground": "ff79c6",
      "token": "constant.character.escaped"
    },
    {
      "foreground": "ff79c6",
      "token": "constant.character.escape"
    },
    {
      "foreground": "ff79c6",
      "token": "string source"
    },
    {
      "foreground": "ff79c6",
      "token": "string source.ruby"
    },
    {
      "foreground": "ff79c6",
      "token": "keyword"
    },
    {
      "foreground": "ff79c6",
      "token": "storage"
    },
    {
      "foreground": "8be9fd",
      "fontStyle": "italic",
      "token": "storage.type"
    },
    {
      "foreground": "50fa7b",
      "fontStyle": "underline",
      "token": "entity.name.class"
    },
    {
      "foreground": "50fa7b",
      "fontStyle": "italic underline",
      "token": "entity.other.inherited-class"
    },
    {
      "foreground": "50fa7b",
      "token": "entity.name.function"
    },
    {
      "foreground": "ffb86c",
      "fontStyle": "italic",
      "token": "variable.parameter"
    },
    {
      "foreground": "ff79c6",
      "token": "entity.name.tag"
    },
    {
      "foreground": "50fa7b",
      "token": "entity.other.attribute-name"
    },
    {
      "foreground": "8be9fd",
      "token": "support.function"
    },
    {
      "foreground": "6be5fd",
      "token": "support.constant"
    },
    {
      "foreground": "66d9ef",
      "fontStyle": " italic",
      "token": "support.type"
    },
    {
      "foreground": "66d9ef",
      "fontStyle": " italic",
      "token": "support.class"
    },
    {
      "foreground": "f8f8f0",
      "background": "ff79c6",
      "token": "invalid"
    },
    {
      "foreground": "f8f8f0",
      "background": "bd93f9",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "cfcfc2",
      "token": "meta.structure.dictionary.json string.quoted.double.json"
    },
    {
      "foreground": "6272a4",
      "token": "meta.diff"
    },
    {
      "foreground": "6272a4",
      "token": "meta.diff.header"
    },
    {
      "foreground": "ff79c6",
      "token": "markup.deleted"
    },
    {
      "foreground": "50fa7b",
      "token": "markup.inserted"
    },
    {
      "foreground": "e6db74",
      "token": "markup.changed"
    },
    {
      "foreground": "bd93f9",
      "token": "constant.numeric.line-number.find-in-files - match"
    },
    {
      "foreground": "e6db74",
      "token": "entity.name.filename"
    },
    {
      "foreground": "f83333",
      "token": "message.error"
    },
    {
      "foreground": "eeeeee",
      "token": "punctuation.definition.string.begin.json - meta.structure.dictionary.value.json"
    },
    {
      "foreground": "eeeeee",
      "token": "punctuation.definition.string.end.json - meta.structure.dictionary.value.json"
    },
    {
      "foreground": "8be9fd",
      "token": "meta.structure.dictionary.json string.quoted.double.json"
    },
    {
      "foreground": "f1fa8c",
      "token": "meta.structure.dictionary.value.json string.quoted.double.json"
    },
    {
      "foreground": "50fa7b",
      "token": "meta meta meta meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "ffb86c",
      "token": "meta meta meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "ff79c6",
      "token": "meta meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "bd93f9",
      "token": "meta meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "50fa7b",
      "token": "meta meta meta.structure.dictionary.value string"
    },
    {
      "foreground": "ffb86c",
      "token": "meta meta.structure.dictionary.value string"
    }
  ],
  "colors": {
    "editor.foreground": "#f8f8f2",
    "editor.background": "#282a36",
    "editor.selectionBackground": "#44475a",
    "editor.lineHighlightBackground": "#44475a",
    "editorCursor.foreground": "#f8f8f0",
    "editorWhitespace.foreground": "#3B3A32",
    "editorIndentGuide.activeBackground": "#9D550FB0",
    "editor.selectionHighlightBorder": "#222218"
  }
}
