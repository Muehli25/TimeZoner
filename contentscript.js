console.log("Ready to go!");

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("EDT", "g"), "UTC-4");
