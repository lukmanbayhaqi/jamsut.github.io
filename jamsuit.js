let condition = true;

while (condition) {
    let lawan = prompt('batu / gunting / kertas ?');
    let comp = Math.random(1)

    if (comp < 0.34) {
        comp = 'batu';
    } else if (comp >= 0.34 && comp < 0.66) {
        comp = 'gunting';
    } else {
        comp = 'kertas';
    }

    let hasil = '';
    if (lawan == comp) {
        hasil = 'Hasilnya Seri'
    } else if (lawan == 'batu') {
        hasil = (comp == 'gunting') ? 'MENANG' : 'KALAH';
    } else if (lawan == 'kertas') {
        hasil = (comp == 'gunting') ? 'KALAH' : 'MENANG';
    } else if (lawan == 'gunting') {
        hasil = (comp == 'batu') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan Pilihan Yang Salah';
    }
    alert(`anda memilih ${lawan} dan komputer memilih ${comp} \n maka hasilnya adalah anda ${hasil}`)
    condition = confirm('anda ingin bermain lagi?')
}
alert('sampai jumpa')