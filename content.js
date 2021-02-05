chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		let dlpdf = document.createElement("a");
        var url=location.href
        var id = url.match(/\d{4}.\d{5}/);
        name=document.title+".pdf"
        dlpdf.href = "https://arxiv.org/pdf/"+id+".pdf";
        dlpdf.download=name
        dlpdf.click();
        dlpdf.remove();
	}
});
