function kalkulator() {
    var hasil = prompt("masukkan karakter! +, -, /, *")
    if (hasil == "+") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan niali 2"))

        var hasilTambah = nilai1 + nilai2
        alert(hasilTambah)

        var konfirmasi = confirm("A tujarribu marrotan tsaniyatan?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("la takhruj")
        }
    }
    if (hasil == "-") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan nilai 2"))

        var hasilKurang = nilai1 - nilai2
        alert(hasilKurang)

        var konfirmasi = confirm("A tujarribu marrotan tsaniyatan?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("la takhruj")
        }
    }
    if (hasil == "/") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan nilai 2"))

        var hasilBagi = nilai1 / nilai2
        alert(hasilBagi)

        var konfirmasi = confirm("A tujarribu marrotan tsaniyatan?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("la takhruj")
        }
    }
    if (hasil == "*") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan nilai 2"))

        var hasilKali = nilai1 * nilai2
        alert(hasilKali)

        var konfirmasi = confirm("A tujarribu marrotan tsaniyatan?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("la takhruj")
        }
    }
}

kalkulator()