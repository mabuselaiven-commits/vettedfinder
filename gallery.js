const galleries = {

  elegantDecor: [

    "images/decor1.jpg",

    "images/decor2.jpg",

    "images/decor3.jpg",

    "images/decor4.jpg",

    "images/decor5.jpg"

  ],

  ditauCatering: [

    "images/catering1v4.jpg",

    "images/catering2v4.jpg",

    "images/catering3v4.jpg",

    "images/catering4v4.jpg",

    "images/catering5v4.jpg"

  ]

};


function openGallery(vendor){

  const modal = document.getElementById("galleryModal");

  const container = document.getElementById("galleryImages");

  container.innerHTML = "";

  galleries[vendor].forEach(image => {

    container.innerHTML += `

      <img src="${image}">

    `;

  });

  modal.style.display = "flex";

}


function closeGallery(){

  document.getElementById("galleryModal").style.display = "none";

}