document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.getSelected(null, function (tab) {
		new QRCode(document.getElementById('qrcode'), tab.url);
	})
})