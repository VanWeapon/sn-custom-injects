/* Function to add style element */ 
function addStyle(styles) { 

    /* Create style document */ 
    var css = document.createElement('style'); 
    css.type = 'text/css'; 

    if (css.styleSheet)  
        css.styleSheet.cssText = styles; 
    else  
        css.appendChild(document.createTextNode(styles)); 

    /* Append style to the tag name */ 
    document.getElementsByTagName("head")[0].appendChild(css); 
} 

/* Function to add style element */ 
function addIframeStyle(styles) { 

    /* Create style document */ 
    var css = document.createElement('style'); 
    css.type = 'text/css'; 

    if (css.styleSheet)  
        css.styleSheet.cssText = styles; 
    else  
        css.appendChild(document.createTextNode(styles)); 

    /* Append style to the tag name */ 
    var x = document.getElementById("gsft_main");
    x.onload = function(){
	    var y = x.contentDocument;
	    y.getElementsByTagName("head")[0].appendChild(css);
    }
} 

/* Set the style */ 
var styles = '.CodeMirror-code div { font-size:15px !important; font-family: "Fira Code" !important; }'; 

/* Function call */ 
addStyle(styles);
if(document.getElementById('gsft_main') != null){
  addIframeStyle(styles);
}


