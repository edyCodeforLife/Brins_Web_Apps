import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';

export default (props) =>
{
    let config = {
        headerLogoText:'FAQ',
        grayBoxText: 'Frequently Asked Question',
        triangleDown: ''
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <main>
                    <section className="text-wrap col-sm-12 txt-faq">
                        <ol type="1">
                            <li><strong>Apa itu BRINS MOBILE?</strong></li>
                            <p>Brins Mobile merupakan layanan penjualan produk asuransi Brins melalui aplikasi mobile.</p>
                            <li><strong>produk apa saja yang dapat diakses dari BRINS Mobile?</strong></li>
                            <p>produk yang dapat diakses melalui aplikasi BRINS Mobile adalah BRINS ASRI.</p>
                            <li><strong>Apa itu BRINS ASRI?</strong></li>
                            <p>BRINS ASRI adalah produk unggulan BRINS yang memberikan perlindungan lengkap terhadap rumah anda dari berbagai risiko beserta perluasan jaminannya. Terdapat 3 pilihan paket jaminan: Silver, Gold, dan platinum. Detail jaminan dapat dilihat pada menu di aplikasi.</p>

                            <div className="txt-sub-faq">
                                <div className="card-body bg-light ">
                                    <h6 className="card-title"><strong className="card-category">Silver</strong></h6>
                                </div>
                                <div>
                                    <h6><strong>kebakaran</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                </div>

                                <div className="card-body bg-light ">
                                    <h6 className="card-title"><strong className="card-category">Gold</strong></h6>
                                </div>
                                <div>
                                    <h6><strong>kebakaran</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>TJH pihak ke-III</strong></h6>
                                    <h6>10% dari harga pertanggungan, maksimum 25 juta rupiah</h6>
                                    <h6><strong>Banjir</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>Kerusuhan dan huru - hara</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>Terorisme dan sabotase</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>Kebongkaran</strong></h6>
                                    <h6>10% dari harga pertanggungan, maksimum 25 juta rupiah</h6>
                                    <h6><strong>Santunan duka meninggal dunia</strong></h6>
                                    <h6>10 juta rupiah</h6>
                                    <h6><strong>Rawat inap 30 hari</strong></h6>
                                    <h6>1 juta rupiah per hari, maksimum 30 juta rupiah</h6>
                                    <h6><strong>Bantuan sewa rumah</strong></h6>
                                    <h6>10% dari harga pertanggungan, maksimum 25 juta rupiah</h6>
                                </div>
                                <div className="card-body bg-light ">
                                    <h6 className="card-title"><strong className="card-category">platinum</strong></h6>
                                </div>
                                <div>
                                    <h6><strong>kebakaran</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>TJH pihak ke-III</strong></h6>
                                    <h6>10% dari harga pertanggungan, maksimum 25 juta rupiah</h6>
                                    <h6><strong>Banjir</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>Kerusuhan dan huru - hara</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>Terorisme dan sabotase</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                    <h6><strong>Kebongkaran</strong></h6>
                                    <h6>10% dari harga pertanggungan, maksimum 25 juta rupiah</h6>
                                    <h6><strong>Santunan duka meninggal dunia</strong></h6>
                                    <h6>10 juta rupiah</h6>
                                    <h6><strong>Rawat inap 30 hari</strong></h6>
                                    <h6>1 juta rupiah per hari, maksimum 30 juta rupiah</h6>
                                    <h6><strong>Bantuan sewa rumah</strong></h6>
                                    <h6>10% dari harga pertanggungan, maksimum 25 juta rupiah</h6>
                                    <h6><strong>Gempa Bumi</strong></h6>
                                    <h6>100% dari harga pertanggungan</h6>
                                </div>
                            </div>
                            <li><strong>Rumah saya berada di luar kota tetapi saya masih berdomisili di Jakarta apakah saya dapat membeli polis BRINS ASRI melalui BRINS Mobile?</strong></li>
                            <p>Anda dapat membeli polis BRINS ASRI melalui BRINS Mobile untuk lokasi pertanggungan di seluruh wilayah Indonesia.</p>
                            <li><strong>Bagaimana langkah yang harus saya lakukan untuk membeli polis BRINS ASRI?</strong></li>
                            <ol type="a">
                                <li>Registrasikan dahulu data anda. Setelah selesai registrasi akan dikirimkan email verifikasi ke alamat email yang didaftarkan.</li>
                                <li>Login dengan username dan password anda.</li>
                                <li>pilih BRINS ASRI.</li>
                                <li>pilih jenis paket pertanggungan yang diinginkan.</li>
                                <li>Isi data Informasi Bangunan dan Form SppA.</li>
                                <li>Kirim data yang sudah lengkap dengan ketuk KONFIRMASI.</li>
                                <li>Tunggu email notifikasi persetujuan dari dari BRINS.</li>
                                <li>Lakukan pembayaran dengan payment gateway yang tersedia di aplikasi.</li>
                                <li>Anda akan menerima email tanda terima pembayaran premi.</li>
                            </ol>
                            <li><strong>Dimana saya bisa memeriksa kembali order transaksi saya?</strong></li>
                            <p>Anda dapat melihat order transaksi di tab Daftar Transaksi.</p>
                            <li><strong>Setelah melakukan order atas polis BRINS ASRI melalui BRINS Mobile, apa yang harus saya lakukan?</strong></li>
                            <p>Anda akan menerima notifikasi persetujuan pertanggungan dari BRINS dan anda diminta untuk menyelesaikan transaksi dengan melakukan pembayaran.</p>
                            <li><strong>Bagaimana mekanisme pembayaran premi melalui BRINS Mobile?</strong></li>
                            <p>pembayaran premi di lakukan melalui payment gateway yang terdapat di dalam aplikasi. Anda dapat menggunakan kartu kredit atau transfer melalui virtual account.</p>
                            <li><strong>Apakah aman saya bertransaksi menggunakan kartu kredit di BRINS Mobile?</strong></li>
                            <p>Ya. Transaksi dan informasi kartu kredit anda aman karena kami tidak berhak menyimpan informasi kartu kredit anda.</p>
                            <li><strong>Kapan polis BRINS ASRI saya mulai aktif?</strong></li>
                            <p>Dengan adanya notifikasi persetujuan pertanggungan dari BRINS, maka polis anda akan aktif pukul 12 siang pada hari anda melakukan pembayaran atas polis tersebut. polis berlaku 1 tahun sejak tanggal tersebut.</p>
                            <li><strong>Kapan saya dapat menerima polis BRINS ASRI melalui pembelian di BRINS Mobile?</strong></li>
                            <p>polis dalam bentuk e-policy akan dikirim ke e-mail anda yang terdaftar pada hari yang sama setelah anda melakukan pembayaran premi.</p>
                            <li><strong>Bagaimana caranya saya mendapatkan informasi mengenai produk BRINS lainnya yang saya butuhkan?</strong></li>
                            <p>Anda dapat menghubungi call center BRINS di nomor (021)1500699 untuk mendapatkan informasi lebih lanjut tentang BRINS. Anda juga dapat membuka website www.brins.co.id dan menghubungi cabang BRINS terdekat di kota anda.</p>
                        </ol>
                    </section>
                </main>
            </div>
            <FooterBackground/>
        </div>
    )
}