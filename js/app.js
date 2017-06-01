/*
 * Archivo principal de funcionalidad de JS
 */
 
 (function modal(){
 	var boxes = Array.from(document.getClassName("cajas"));
 	var fantasma= document.getElementById("fantasma");
	var modal, close, img;
 		boxes.forEach(function(cv){
		cv.addEventListener("click", function(){
			fantasma.innerHTML = "";
			modal = document.createElement("div");
			modal.classList.add("fantasmita");
			modal.innerHTML = cv.innerHTML;			
			fantasma.appendChild(bodyModal);
			fantasma.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();