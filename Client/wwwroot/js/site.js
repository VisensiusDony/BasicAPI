// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//Write your JavaScript code.
var data = document.getElementById("title");
var data2 = document.getElementsByClassName("list");
var data3 = document.querySelector("li.list2");
var data4 = document.getElementById("list3");
///var data4 = document.querySelectorAll(".list");
///var data5 = $(".list").html("halo ini dirubah js");

chartGender();
chartUniversity();
chartSalary();

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

/*$("h1").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});*/



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
/*================================Show Table Pokemon================================*/
$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
}).done((result) => {
    console.log(result);
    console.log(result.results);
    var text = "";
    $.each(result.results, function (key, val){
        text += `<tr>
                <td>${val.name}</td>
                <td class="text-capitalize">${val.url}</td>
                <td><button type="button" value= "${val.url}"
                        onclick="getData(this.value)" class="btn btn-primary" data-toggle="modal" data-target="#getPoke">Detail</td>
                </tr>`;
    });
$(".tablePoke").html(text);
}).fail((error)=> {
    console.log(error);
});
/*=====================================Login==========================================*/
/*function loginUser() {
    var obj = new Object();
    obj.Email = $("#InputEmail").val();
    obj.Password = $("#InputPassword").val();
    $.ajax({
        url: 'Account/Auth',
        type: 'post',
        data: obj,
    }).done(result => {
        console.log(result)
        if (result.message == "Login Success") {
            window.location.href = "https://localhost:44375/Employee"
        } else {
            Swal.fire({
                icon: 'error',
                title: result.message,
            });
        }
    }).fail(error => {
        console.log(error),
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal, Data Tidak Sesuai',
            text: error.message,
        });
    });
}*/
/*================================Show Data Table================================*/
var table = "";
$(document).ready(function () {
   table = $('#tableEmployee').DataTable({
        responsive:true,
        "dom": 'Bfrtip',
        "buttons": [
            {
                extend: 'copy',
                className: 'mt-2 btn-warning btn-outline',
                text: '<i class="fa fa-files-o" style="color:black"> <b>Copy</b></i>'
            },
            {
                extend: 'csv',
                className: 'btn-primary btn-outline',
                text: '<i class="fa fa-file-csv" style="color:white"><b>Csv</b></i>',
                exportOptions: {
                    columns:[1,2,3,4,5,6,7,8]
                }
            },
            {
                extend: 'excel',
                className: 'btn-success btn-outline',
                text: '<i class="fa fa-file-excel-o" style="color:black"> <b>Excel</b> </i>',
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7, 8]
                }
            },
            {
                extend: 'pdfHtml5',
                className: 'btn-danger btn-outline',
                text: '<i class="fa fa-file-pdf-o" style="color:white"> <b>PDF</b></i>',
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7, 8]
                }
            },
            {
                extend: 'print',
                className: 'btn-info btn-outline',
                text: '<i class="fa fa-print" style="color:black"> <b>Print</b></i>'
            }
        ],
        'ajax': {
            'url': "Employees/GetRegisteredData",
            'dataType': 'json',
            'dataSrc': ''
        },
        'columns': [
            {
                'data': null,
                'render': function (data, type, row, meta) {
                    return (meta.row + meta.settings._iDisplayStart + 1);
                }
            },
            {
                'data': 'nik'
            },
            {
                'data': 'fullName'
            },
            {
                'data': 'gender',
                'render': (data, type, row) => {
                    if (row['gender'] == 0) {
                        return "Male";
                    } else {
                        return "Female";
                    }
                }
            }, {
                'data': 'email'
                
            }, {
                'data': 'salary',
                'render': function (data, type, row, meta) {
                    return formatRupiah('' + row['salary'], '');
                }

                
            }, {
                'data': 'phone',
                'bSortable': false,
                 'ordering': false
            }, {
                'data': 'birthDate',
                'render': (data, type, row) => {
                    var dataGet = new Date(row['birthDate']);
                    return dataGet.toLocaleDateString();
                }
            },
            {
                'data': 'universityName'
            },
            {
                'data': 'nik',
                'bSortable': false,
                'ordering': false,
                'render': function (data, type, row, meta) {
                    return '<button class="fa fa-edit"  value="' + row['nik'] + '" data-toggle="modal" data-target="#editModal"></button>' +
                        '<button  value= "' +row['nik']+'" class="fa fa-trash" onclick="Delete(this.value)" data-id="' + row['nik'] + '" data-toggle="modal" data-target=""></button>';
                },
            }
       ],
    });
});
/*================================Delete Employee================================*/
function Delete(key) {
    Swal.fire({
        title: 'Yakin ingin dihapus',
        text: "Data akan dihapus dari database",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yakin',
        cancelButtonColor: 'Batal',
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "Employees/Delete/"+key,
                type: "delete",
                crossDomain: true,
            }).done((result) => {
                Swal.fire(
                    'Berhasil',
                    result.messageResult,
                    'success'
                )
                table.ajax.reload();
            }).fail((error) => {
                Swal.fire(
                    'Gagal',
                    'error'
                )
            })
        }
    })
}


/*================================Add Univ Option================================*/
$.ajax({
    'url': "https://localhost:44392/api/University",
}).done((result) => {
    text = "<option selected disabled value=\"\">Choose...</option>";
    $.each(result, function (key, val) {
        text += `<option value="${val.universityId}">${val.universityName}</option>`;
    });
    $("#univ").html(text);
}).fail((error) => {
    console.log(error);
});
/*================================Add Education Option================================*/
$('#univ').change(function () {
    let univ = $(this).val();
    $.ajax({
        'url': 'https://localhost:44392/api/Education',
    }).done((result) => {
        text = "<option selected disabled value=\"\">Choose...</option>";
        $.each(result, function (key, val) {
            if (univ == val.universityId) {
                text += `<option value="${val.degree}">${val.degree}</option>`;
            }
        });
        $("#degree").html(text);
    }).fail((error) => {
        console.log(error);
    });
});
/*================================Get Row DataTable================================*/
$('#tableEmployee').on('click', '.fa-edit', function () {
    let rowData = $('#tableEmployee').DataTable().row($(this).closest('tr')).data();
    console.log(rowData);
    Show(rowData);
});
/*================================Show Row Data in Modal================================*/
function Show(data) {
   /* let gender;
    if (data.gender == "Male") {
        gender = 0;
    }
    else {
        gender = 1;
    }*/
    console.log(data);
    const name = data.fullName;
    const [firstName, lastName] = name.split(' ');
    $("#nikedit").val(data.nik);
    $("#firstNameedit").val(firstName);
    $("#lastNameedit").val(lastName);
    $("#emailedit").val(data.email);
    parseInt($("#salaryedit").val(data.salary));
    if (data.gender == 1) {
        $("#genderedit1").val(gender).prop('checked', true);
    } else {
        $("#genderedit").val(gender).prop('checked', true);
    }
    $("#birthDateedit").val(new Date(data.birthDate+"Z").toISOString().substring(0,10));
    $("#phoneNumberedit").val(data.phone);
}
/*================================Edit Employee================================*/
function Edit() {
    var nik = $("#nikedit").val();
    var obj = new Object();
    obj.FirstName = $("#firstNameedit").val();
    obj.LastName = $("#lastNameedit").val();
    /*obj.nik = $$("#nikedit").val();*/
    obj.NIK = $("#nikedit").val();
    obj.Phone = $("#phoneNumberedit").val();
    obj.BirthDate = $("#birthDateedit").val();
    obj.Salary = parseInt($("#salaryedit").val());
    obj.Email = $("#emailedit").val();
   /* if ($("input[name=genderedit]:checked").val()=="Wanita") {
        obj.Gender = 1;
    } else {
        obj.Gender = 0;
    }*/
    obj.Gender = parseInt($("input[name=genderedit]:checked").val());
    
    $.ajax({
        url: "Employees/UpdateNIK/"+nik,
        type: "PUT",
        data: obj,
    }).done((result) => {
        console.log(obj);
        if (result.message == "Update Success") {
            Swal.fire({
                icon: 'success',
                /*title:'Edit Sukses',*/
                title: result.message
            });
            table.ajax.reload(null, false);
            chartGender();
            chartUniversity();
            chartSalary();
            $('body').removeClass('modal-open');
            $('#editModal').modal('hide');
            $('.modal-backdrop').remove();
       } else {
            Swal.fire({
                icon: 'error',
                /*title: 'Edit Gagal',*/
                title: result.message,
            });
        }
    }).fail((error) => {
        console.log(obj);
        Swal.fire({
            icon: 'error',
            title: 'Edit Gagal',
            text: error.message,
        });
    });
}
/*================================Register================================*/
function Register() {
    var obj = new Object(); 
    //ini ngambil value dari tiap inputan di form nya
    /*obj.NIK = "10111";*/
    obj.FirstName = $("#firstName").val();
    obj.LastName = $("#lastName").val();
    obj.Email = $("#email").val();
    obj.Salary = parseInt($("#salary").val());
    obj.Gender = parseInt($("input[name=gender]:checked").val());
    /*if ($("input[name=gender]:checked").val() == "Wanita") {
        obj.Gender = 1;
    } else {
        obj.Gender = 0;
    }*/
    obj.BirthDate = $("#birthDate").val();
    obj.PhoneNumber = $("#phoneNumber").val();
    obj.Password = $("#password").val();
    obj.GPA = parseFloat($("#gpa").val());
    obj.Degree = $("#degree").val();
    obj.UniversityId = parseInt($("#univ").val());
   /* obj.RoleId = 3;*/
    $.ajax({
        url: "Employees/Register",
        type: "POST",
        data: obj
        /*data: JSON.stringify(obj)*/
    }).done((result) => {
        if (result.message == "Register Success") {
            console.log(obj);
            Swal.fire({
                icon: 'success',
                /*title: 'Registrasi sukses',*/
                title: result.message,
            });
            table.ajax.reload(null, false);
            chartGender();
            chartUniversity();
            chartSalary();
            $('body').removeClass('modal-open');
            $('#regisModal').modal('hide');
            $('.modal-backdrop').remove();
        } else {
            Swal.fire({
                icon: 'error',
                /*title: 'Registrasi sukses',*/
                title: result.message,
            });
        }
}).fail((error) => {
    /*console.log(obj);*/
    Swal.fire({
        icon: 'error',
        title: 'Registrasi Gagal',
        text: error.message,
    });
});
}

/*================================Validation Register================================*/
window.addEventListener('load', () => {
    var forms = document.getElementsByClassName('needs-validation');
    for (let form of forms) {
        form.addEventListener('submit', (evt) => {
            if (!form.checkValidity()) {
                evt.preventDefault();
                evt.stopPropagation();
            } else {
                evt.preventDefault();
                Register();
            }
            form.classList.add('was-validated');
        });
    }
});

/*================================Validation Edit================================*/
    window.addEventListener('load', () => {
        var forms = document.getElementsByClassName('needs-valid');
        for (let form of forms) {
            form.addEventListener('submit', (evt) => {
                if (!form.checkValidity()) {
                    evt.preventDefault();
                    evt.stopPropagation();
                } else {
                    evt.preventDefault();
                    Edit();
                }
                form.classList.add('was-validated');
            });
        }
    });
/*================================Validation Login================================*/
/*window.addEventListener('load', () => {
    var forms = document.getElementsByClassName('user');
    for (let form of forms) {
        form.addEventListener('submit', (evt) => {
            if (!form.checkValidity()) {
                evt.preventDefault();
                evt.stopPropagation();
            } else {
                evt.preventDefault();
                loginUser();
            }
            form.classList.add('was-validated');
        });
    }
});*/
/*================================Chart Donut================================*/
function chartGender() {
    male = 0;
    female = 0;
    jQuery.ajax({
        url: 'Employees/GetRegisteredData',
        success: function (result) {
            $.each(result, function (key, val) {
                if (val.gender == 1) {
                    female++;
                }
                else {
                    male++;
                }
            });
            var options = {
                chart: {
                    type: 'donut',
                    size: '50%',
                    toolbar: {
                        show: true,
                        offsetX: 0,
                        offsetY: 0,
                        tools: {
                            download: true,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                            reset: true | '<img src="/static/icons/reset.png" width="20">',
                            customIcons: []
                        },
                        export: {
                            csv: {
                                filename: undefined,
                                columnDelimiter: ',',
                                headerCategory: 'category',
                                headerValue: 'value',
                                dateFormatter(timestamp) {
                                    return new Date(timestamp).toDateString()
                                }
                            },
                            svg: {
                                filename: undefined,
                            },
                            png: {
                                filename: undefined,
                            }
                        },
                        autoSelected: 'zoom'
                    },
                },
                dataLabels: {
                    enabled: true
                },
                title: {
                    text: 'Perbandingan Gender',
                    align: 'left',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238'
                    },
                },
                series: [male, female],
                labels: ['Male', 'Female'],
                noData: {
                    text: 'Loading...'
                }
            }
            var chart = new ApexCharts(document.querySelector("#chartGender"), options);
            chart.render();
        },
        async: false
    })
}
/*================================Chart Donut================================*/
function chartSalary() {
    upper = 0;
    mid = 0;
    jQuery.ajax({
        url: 'Employees/GetRegisteredData',
        success: function (result) {
            $.each(result, function (key, val) {
                if (val.salary>5000000) {
                    upper++;
                }
                else {
                    mid++;
                }
            });
            var options = {
                chart: {
                    type: 'donut',
                    size: '50%',
                    toolbar: {
                        show: true,
                        offsetX: 0,
                        offsetY: 0,
                        tools: {
                            download: true,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                            reset: true | '<img src="/static/icons/reset.png" width="20">',
                            customIcons: []
                        },
                        export: {
                            csv: {
                                filename: undefined,
                                columnDelimiter: ',',
                                headerCategory: 'category',
                                headerValue: 'value',
                                dateFormatter(timestamp) {
                                    return new Date(timestamp).toDateString()
                                }
                            },
                            svg: {
                                filename: undefined,
                            },
                            png: {
                                filename: undefined,
                            }
                        },
                        autoSelected: 'zoom'
                    },
                },
                dataLabels: {
                    enabled: true
                },
                title: {
                    text: 'Salary Rate',
                    align: 'left',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238'
                    },
                },
                series: [upper, mid],
                labels: ['Gaji Di Atas 5jt', 'Gaji Di Bawah 5jt'],
                noData: {
                    text: 'Loading...'
                }
            }
            var chart = new ApexCharts(document.querySelector("#chartSalary"), options);
            chart.render();
        },
        async: false
    })
}
/*================================Chart Bar================================*/
function chartUniversity() {
    let universityA = null;
    let universityB = null;
    let universityC = null;
    jQuery.ajax({
        url: 'Employees/GetRegisteredData',
        success: function (result) {
            $.each(result, function (key, val) {
                if (val.universityName == "Universitas Dian Nuswantoro") {
                    universityA++;
                } else if (val.universityName == "Universitas Diponegoro") {
                    universityB++;
                } else {
                    universityC++;
                }
            });
            var options = {
                chart: {
                    type: 'bar',
                    size: '50%',

                },
                series: [{
                    name: 'employee',
                    data: [universityA, universityB, universityC]
                }],
                title: {
                    text: 'Jumlah Individu per Universitas',
                    align: 'left',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238'
                    },
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ["Universitas Dian Nuswantoro", "Universitas Diponegoro", "Universitas Negeri Semarang"]
                }
            }
            var barChart = new ApexCharts(document.querySelector("#chartUniversity"), options);
            barChart.render();
        },
        async: false
    });
}
/*================================Format Salary================================*/
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}




    /*function getData(link){
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
    }*/

/*================================Show Pokemon Detail================================*/
   function getData(link) {
        $.ajax({
            url: link
        }).done((result) => {
            console.log(result);
            var ability = "";
            $.each(result.abilities, function (key, val) {
                ability += /*`${val.ability.name}&nbsp|&nbsp`*/ `<span class="ability badge-pill badge-light text-capitalize" style="text-align">${val.ability.name}</span> &nbsp`;
            });
            var typePoke = "";
            $.each(result.types, function (key, val) {
                typePoke += typePokeColor(val.type.name) + "&nbsp";
            });

            function typePokeColor(val) {
                if (val == "grass") {
                    var color = `<span class="badge badge-success text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
                else if (val == "water") {
                    var color = `<span class="badge badge-primary text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
                else if (val == "poison") {
                    var color = `<span class="badge badge-dark text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
                else if (val == "normal") {
                    var color = `<span class="badge badge-light text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
                else if (val == "fire") {
                    var color = `<span class="badge badge-danger text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
                else if (val == "electric") {
                    var color = `<span class="badge badge-warning text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
                else {
                    var color = `<span class="badge badge-secondary text-capitalize" style="text-align: center;">${val}</span>`;
                    return color;
                }
            }
            var statPoke = "";
            $.each(result.stats, function (key, val) {
                statPoke += `<div class="row">
                         <div class="text-capitalize" id="base" ><b>${val.stat.name}</b></div>
                         </div>
                            <div class="row progress">
                          <div class="progress-bar" role="progressbar" style="width: ${val.base_stat + "%"};" aria-valuenow="${val.base_stat}" aria-valuemin="0" aria-valuemax="1000">${val.base_stat}</div>
                           </div>`;
            });
            var img = ""
            img += `
            <img src="${result.sprites.other.dream_world.front_default}" alt="" width="250" height="250" style="background-color:gainsboro;" class="rounded-circle shadow p-0 mb-5 rounded"/></div>`;

            $(".detailName").html(result.name);
            $(".ability").html(":" + ability);
            $(".height").html(": " + result.height);
            $(".weight").html(": " + result.weight);
            $("#stat").html(statPoke);
            $(".badge").html(typePoke);


            $("#detailImage").html(img);

        }).fail((error) => {
            console.log(error);
        });
    }

