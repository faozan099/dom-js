// DOOM Selection
// SECTION 2 ducument.getElementById() -> elemet

const judul = document.getElementById('judul');
judul.style.color= 'red';
judul.style.backgroundColor= '#ccc';
judul.innerHTML = 'Hallo Everyone';

// SECTION 3 document.querySelector
const p4 = document.querySelector('#b p')
p4.style.color = 'green';
p4.style.fontSize = '30px';
p4.style.fontDecoration = 'none'

// SECTION 4 MANIPULATING
const judul = document.getElementsById('judul');
judul.innerHTML = '<em>Percobaan<em>';
const sectionB = document.querySelector('section#b p');
sectionB.innerHTML = 'Hello Bro';
const judul = document.querySelector('judul');
judul.style.color= 'red';

// SECTION 5 SETATTRIBUT
let judul = document.getElementById("text");
		judul.setAttribute("style" "color: red; font-size: 24px;");
		
        function hapusAtribut() {
			let judul = document.getElementById("text");
			judul.removeAttribute("style");
        }

// SECTION 6
const h6 = document.getElementById("h6");
		h6.style.color = "red";
		h6.style.fontSize = "24px";
		h6.style.fontWeight = "bold";
const teks = document.getElementsByClassName(teks)
		teks.style.color = "blue";
		teks.style.color = "20px";
		teks.style.color = "italic";

// SECTION 7 
// javascript event

let sendd = document.querySelector('#sendd');

function display() {
    alert('It was clicked!');
}
sendd.addEventListener('click',display);

document.getElementById("container").addEventListener("mouseover", function() {
	this.style.backgroundColor = "yellow";
  });

//   javascript handlle event

let tombol = document.getElementById("tombol");

		tombol.addEventListener("click", function() {
			alert("Tombol telah diklik!");
		});

let tombol = document.getElementById("tombol");
		
		tombol.addEventListener("click", klikTombol);
		function klikTombol() {
			alert("Tombol telah diklik!");
		}
 
// SECTION 8
// RADIO BUTTON

function tampilkanJenisKelamin() {
	// Mendapatkan nilai radio button yang terpilih
	let jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
	
	// Menampilkan jenis kelamin yang dipilih
	alert("Jenis kelamin yang dipilih adalah " + jenisKelamin);
}

function tampilkanUkuranBaju() {
	var radio = document.getElementsByName("ukuran");
	
	var ukuran = "";
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			ukuran = radio[i].value;
			break;
		}
	}
	alert("Ukuran baju yang dipilih adalah " + ukuran);
}

// javascript Change Event

function ubahUkuran() {
	var ukuran = document.getElementById("ukuranFont").value;
	document.getElementById("tulisan").style.fontSize = ukuran + "px";
}

let select = document.querySelector('#lang');
        let result = document.querySelector('#result');
        select.addEventListener('change', function () {
            result.textContent = this.value;
		}


