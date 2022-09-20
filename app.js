document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

let resim = document.querySelector(".resim");
let ses = document.querySelector(".ses");

//!ara butonu tıklandığında

document.querySelector(".ara").onclick = () => {
  resim.src = "./img.gif";

  //play() fonksiyonu audio element ini çalıştırır
  ses.play();
  //sesin volume ünü 0-1 arasında değer vererek ayarlayabiliriz
  ses.volume = 0.2;
};

//!baglat butonu tıklandığında
document.querySelector(".bagla").onclick = () => {
  resim.src = "./telbağla.gif";
  //pause() metodu çalışan audio sesini kapatır
  ses.pause();
};

//!konus butonu tıklandığında
document.querySelector(".konus").onclick = () => {
  resim.src = "./telefon.gif";
  ses.pause();
};

//!mouse ile resmin üzerine gelince
resim.onmouseover = () => {
  resim.src = "./aslan1.jpeg";
};

//!mouse ile resmin üzerinden ayrılınca
// 2. kullanım şeklini seçtik
resim.addEventListener("mouseout", () => {
  resim.src = "./aslan2.jpeg";
});

//!klavyeden inputa veri girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const text = document.querySelector(".textbox");
const tik = document.querySelector(".checkbox");

// checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür

//? onkeyup=klavyeden elini çektiğinde
text.onkeyup = () => {
  if (tik.checked) {
    text.value = text.value.toUpperCase();
  } else {
    text.value = text.value.toLowerCase();
  }
};
