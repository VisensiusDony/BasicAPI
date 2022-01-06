// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//Write your JavaScript code.
var data = document.getElementById("title");
var data2 = document.getElementsByClassName("list");
var data3 = document.querySelector("li.list2");
var data4 = document.getElementById("list3");
///var data4 = document.querySelectorAll(".list");
///var data5 = $(".list").html("halo ini dirubah js");



/*data = document.addEventListener("mouseover", function () {
    data2.style.backgroundColor = "green";
});*/
//var data6 = document.getElementById("judul4");
////data6 = document.attachEvent("onclick", myfunction());
////data.style.backgroundColor = "lightgreen";
////data.innerHTML = "halo ini dirubah dari JS";

/*function myfunction(){
    data6.innerHTML = "halo ini dirubah dari JS";
    data6.style.backgroundColor = "lightgreen";
}*/

/*for (var i = 0; i < data2.length; i++) {
    data2[i].style.backgroundColor = "white";
}*/
function ubah() {
    $("section#a p.p2").html("testing").css({ "background-color": "yellow", "font-size": "20px" });
}
$("button.php").on("click", function () {
    $("h1.title").html("Bahasa Pemrograman PHP")
    $("iframe").attr("src", "https://www.youtube.com/embed/TaBWhb5SPfc")
    $("p#p1").
        html("Dalam pengembangan website, PHP menjadi salah satu bahasa pemrograman yang wajib dipelajari. Alasannya, bahasa pemrograman ini mampu untuk membuat website menjadi dinamis.")
    $("p#p2").
        html("PHP  (PHP: Hypertext Preprocessor) adalah sebuah bahasa pemrograman server side scripting yang bersifat open source.Sebagai sebuah scripting language, PHP menjalankan instruksi pemrograman saat proses runtime.Hasil dari instruksi tentu akan berbeda tergantung data yang diproses.PHP merupakan bahasa pemrograman server - side, maka script dari PHP nantinya akan diproses di server.Jenis server yang sering digunakan bersama dengan PHP antara lain Apache, Nginx, dan LiteSpeed. ")
});

$("button.csharp").on("click", function () {
    $("h1.title").html("Bahasa Pemrograman C#")
    $("iframe").attr("src", "https://www.youtube.com/embed/GhQdlIFylQ8")
    $("p#p1").html("C# atau yang dibaca C sharp adalah bahasa pemrograman sederhana yang digunakan untuk tujuan umum, dalam artian bahasa pemrograman ini dapat digunakan untuk berbagai fungsi misalnya untuk pemrograman server-side pada website, membangun aplikasi desktop ataupun mobile, pemrograman game dan sebagainya. Selain itu C# juga bahasa pemrograman yang berorientasi objek, jadi C# juga mengusung konsep objek seperti inheritance, class, polymorphism dan encapsulation.")
    $("p#p2").html("Dalam prakteknya C# sangat bergantung dengan framework yang disebut .NET Framework, framework inilah yang nanti digunakan untuk mengcompile dan menjalankan kode C#. C# dikembangkan oleh Microsoft dengan merekrut Anders Helsberg. Tujuan dibangunnya C# adalah sebagai bahasa pemrograman utama dalam lingkungan .NET Framework (lihat C#). Banyak pihak juga yang menganggap bahwa Java dengan C# saling bersaing, bahkan ada juga yang menyatakan jika pernah belajar Java maka belajar C# akan sangat mudah dan begitu juga sebaliknya. Anggapan tersebut sebenarnya tidak salah karena perlu diketahui sebelum adanya C# Microsoft mengembangkan J++ dengan maksud mencoba membuat Java agar berjalan pada platform Windows, karena adanya masalah dari pihak luar maka Microsoft menghentikan proyek J++ dan beralih untuk mengembangkan bahasa baru yaitu C#.")
});

$("button.python").on("click", function () {
    $("h1.title").html("Bahasa Pemrograman Python")
    $("iframe").attr("src", "https://www.youtube.com/embed/rfscVS0vtbw")
    $("p#p1").html("Python adalah bahasa pemrograman interpretatif yang dapat digunakan di berbagai platform dengan filosofi perancangan yang berfokus pada tingkat keterbacaan kode dan merupakan salah satu bahasa populer yang berkaitan dengan Data Science, Machine Learning, dan Internet of Things (IoT). Keunggulan Python yang bersifat interpretatif juga banyak digunakan untuk prototyping, scripting dalam pengelolaan infrastruktur, hingga pembuatan website berskala besar.")
    $("p#p2").html("Bahasa Python menjadi keharusan untuk Anda yang ingin mempelajari dasar-dasar scripting dan pengolahan data atau machine learning.Bahasa Python digunakan secara luas, masuk dalam 3 besar bahasa pemrograman yang digunakan dalam beberapa tahun belakangan.Pustaka(Library) yang luas, memungkinkan Anda mengembangkan ke bidang - bidang lainnya.Beberapa library atau framework terpopuler data science dan machine learning menggunakan Python antara lain: Scikit - Learn, TensorFlow, PyTorch.Bahasa Python memiliki kurva pembelajaran(learning - curve) yang sangat landai, cocok untuk dipelajari sebagai bahasa pemrograman pertama - dengan kemudahan pembacaan dan kemudahan mempelajari sintaksisnya.")
});

$("button.time").dblclick(function () {
    $(this).hide();
});

$(".col#column1").on("click", function () {
    $(".col#column2").css("background-color", "yellow")
    $(".col#column3").css("background-color", "red")
    $(".col#column4").css("background-color", "black")
    $(".col#column5").css("background-color", "aqua")
    $(".col#column6").css("background-color", "green")

});
$("h1.title").mouseenter(function () {
    alert("Welcome in Bahasa Pemrograman!");
});

$("h1").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});



// Activate Carousel
$("#carouselExampleCaptions").carousel();

// Enable Carousel Controls
$(".carousel-control-prev").click(function () {
    $("#carouselExampleCaptions").carousel("prev");
});
$(".carousel-control-next").click(function () {
    $("#carouselExampleCaptions").carousel("next");
});

/*let array = [1, 2, 3, 4];
console.log(array);

let arraymulti = [1, 2, 3, 'a', 'b', ['c', 'd', 4], true];
console.log(arraymulti);

array.push('halo');
console.log(array);
array.pop();
console.log(array);
array.unshift("testing");
console.log(array);
array.shift();
console.log(array);*/

let mahasiswa = {
    name: 'budi',
    nim: 'a112323',
    age: 18,
    hobby: ['mancing', 'berantem', 'pembalap']
}

console.log(mahasiswa);
console.log(mahasiswa.name);
console.log(mahasiswa.hobby[1]);

let animals = [
    { name: "bimo", species: "cat", class: { name: "mamalia" } },
    { name: "budi", species: "cat", class: { name: "mamalia" } },
    { name: "nemo", species: "snail", class: { name: "invertebrata" } },
    { name: "dori", species: "cat", class: { name: "mamalia" } },
    { name: "simba", species: "snail", class: { name: "invertebrata" } }
]

let OnlyCat = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species == "cat") {
        OnlyCat.push(animals[i]);
    }
}

for (let i = 0; i < animals.length; i++) {
    if (animals[i].class.name == "invertebrata") {
        animals[i].class.name = "Non-Mamalia";
    }
}

console.log(animals);
console.log(OnlyCat);

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon"
}).done((result) => {
    console.log(result);
    console.log(result.results);
    var text = "";
    $.each(result.results, function (key, val){
        text += `<tr>
                <td>${key+1}</td>
                <td>${val.name}</td>
                <td><button type="button" value= "${val.url}"
                        onclick="getData2(this.value)" class="btn btn-primary" data-toggle="modal" data-target="#getPoke">Detail</td>
                </tr>`;
    });
$(".tablePoke").html(text);
}).fail((error)=> {
    console.log(error);
});

function getData(link){
    $.ajax({
        url: link
    }).done((result) => {
        text = "";
        srcAbility = "";
        $.each(result.abilities, function (key, val) {
            srcAbility += `${val.ability.name + "&nbsp"},`;
        });
        srcHeld = " ";
        $.each(result.types, function (key, val) {
            srcHeld += `<span class="badge badge-secondary">${val.type.name}</span> &nbsp`;
        });
        text += `<div class="container">
            <div class="text-center">
            <img src="${result.sprites.other.dream_world.front_default}" alt="" /></div>
            <div class="row">
                <div class="col">${srcHeld}</div>
            </div>
            <div class="row">
                <div class="col">Name </div>
                <div class="col">: ${result.name}</div>
           </div>
            <div class="row">
                <div class="col">Ability</div>
                <div class="col">: ${srcAbility}</div>
            </div>
            <div class="row">
               <div class="col">Weight</div>
                <div class="col">: ${result.weight} Kg</div>
            </div>
            <div class="row">
                <div class="col">Height</div>
                <div class="col">: ${result.height} Cm</div>
            </div></div>`;
    
    $(".modal-body").html(text);
}).fail((error) => {
       console.log(error);
    });
}

function getData2(link) {
    $.ajax({
        url: link
    }).done((result) => {
        console.log(result);
        var ability = "";
        $.each(result.abilities, function (key, val) {
            ability += `${val.ability.name}`;
        });
        var typePoke = "";
        $.each(result.types, function (key, val) {
            typePoke += `<span>${val.type.name}</span> &nbsp`;
                if (val.type.name == "water") {
                    $(".badge1").html(val.type.name);
                } else if (val.type.name == "grass") {
                    $(".badge1").html(val.type.name);
                } else if (val.type.name == "poison") {
                    $(".badge2").html(val.type.name);
                }
        });
        var img=""
        img += `
            <img src="${result.sprites.other.dream_world.front_default}" alt=""/></div>`;

        $(".detailName").html(result.name);
        $(".ability").html(ability);
        $(".height").html(result.height);
        $(".weight").html(result.weight);
        
        $("#detailImage").html(img);
        
        
    }).fail((error)=> {
        console.log(error);
    });
}
