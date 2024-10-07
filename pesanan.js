function akhiriPesanan() {
    const pesanan = [];
    
    if (document.getElementById('nasiAyam').checked) {
        pesanan.push('Nasi Ayam Bakar');
    }
    if (document.getElementById('nasiTelur').checked) {
        pesanan.push('Nasi Telur Dadar');
    }
    if (document.getElementById('ketoprak').checked) {
        pesanan.push('Ketoprak');
    }

    if (pesanan.length > 0) {
        console.log('Pesanan Anda:', pesanan.join(', '));
    } else {
        console.log('Anda belum memilih pesanan.');
    }
}
