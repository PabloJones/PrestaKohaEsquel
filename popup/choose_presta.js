

document.addEventListener("click", (e) => {
var x = document.getElementsByTagName("div");
var i;


  if (e.target.classList.contains("presta")) {
    var chosenPresta = e.target.textContent;
    browser.tabs.executeScript(null, { 
      file: "/content_scripts/prestafy.js" 
    });

	for (i = 0; i < x.length; i++) {
		if (x[i].id==chosenPresta){
			x[i].style.backgroundColor = "#FBFBC9";
		}else
			x[i].style.backgroundColor = "";
	} 
	
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {tipoPrestamo: chosenPresta});
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
  }
});