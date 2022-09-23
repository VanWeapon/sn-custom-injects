const userStyles = `
.CodeMirror-code div { font-size:15px !important; font-family: "Fira Code" !important; }
.cm-s-snc.CodeMirror, .cm-s-snc .CodeMirror-gutters {
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
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
.cm-s-snc .CodeMirror-matchingbracket { text-decoration: underline !important; color: white !important; }`;


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
}

function loadStyles(){
	var int = setInterval(() => {
		inj.intervals.push(int);
		let success = false;
		try{
			
			inj.log("Trying to fetch iframe");
			success = inj.setIframe(window.gsft_main);
		} catch(e){
			console.error(e);
		}
		if(success){
			clearInterval(int);
			inj.log("Setting styles")
			inj.setStylesIframe();
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

