import React from 'react';
import FooterBackground from '../common/footer-background';
import HeaderFixContainer from '../common/header-fix-container';

export default (props) =>
{
    let config = {
        headerLogoText:'About Us',
        grayBoxText: 'About Us',
        triangleDown: ''
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <main className="text-wrap col-sm-12 txt-about-us text-left my-5">
                    <p>PT. Asuransi Bringin Sejahtera Artamakmur (BRINS General Insurance) adalah sebuah perusahaan asuransi umum yang didirikan oleh Dana Pensiun  PT. Bank Rakyat Indonesia(persero)</p>

                    <p>BRINS General Insurance didirikan pada tanggal 17 April 1989 berdasarkan akta notaris Muhani Salim SH, di Jakarta No.121 dan disahkan dengan penetapan Menteri kehakiman RI tanggal 3 Mei 1989 No. C2.4160.HT.01.01 tahun 1989.</p>

                    <p>Dalam memenuhi permintaan dan kebutuhan masyarakat luas dalam perlindungan risiko, BRINS memiliki produk-produk asuransi kerugian, yaitu : asuransi properti, kendaraan bermotor, pengangkutan, rekayasa, kecelakaan diri, kapal pesawat, satelit, uang, tanggung gugat, kredit, dan penjaminan selain produk konvensional BRINS juga mengelola risiko secara Syariah sejak tahun 2003.</p>

                    <p>BRINS telah meraih berbagai penghargaan bergengsi didunia perasuransian Indonesia antara lain:

                        <ol type="1" className="text-wrap mx-5">
                            <li>Infobank-"The Best Insurance" kategori premi bruto di atas Rp 1 Trilliun dan "Predikat Sangat Bagus" atas kinerja keuangan 2016.</li>
                            <li>Media Asuransi-"2nd Best General Insurance" kategori Ekuitas Rp 500 M - 1,5 Trilliun.</li>
                            <li>Investor "Asuransi Umum Terbaik 2017".</li>
                            <li>Warta Ekonomi-"Best Financial Performance".</li>
                            <li>Business News-"Top General Insurance".</li>
                            <li>KARIM Consulting Indonesia-"The Best Risk Management".</li>
                        </ol>
                    </p>
                </main>
            </div>
            <FooterBackground/>
        </div>

    )
}