function t(t){return parseFloat(t.replace(/[$,]/g,""))}var r,a=document.querySelector("ul");(r=Array.from(a.children)).sort(function(r,a){var e=t(r.getAttribute("data-salary"));return t(a.getAttribute("data-salary"))-e}),r.forEach(function(t){return a.appendChild(t)}),Array.from(a.children).map(function(r){return{name:r.textContent.trim(),position:r.getAttribute("data-position"),salary:t(r.getAttribute("data-salary")),age:r.getAttribute("data-age")}});
//# sourceMappingURL=index.fc0b07b1.js.map