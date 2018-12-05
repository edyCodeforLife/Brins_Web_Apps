import React from 'react';
import SuccessPage from '../common/success-page';

export default (props) =>{
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Dokumen',
        grayBoxText:'Upload Produk',
        headerText:'Upload Suskes',
        description:`Nomor referensi anda 1858585 Terima Kasih telah membeli produk kami,
                     selanjutnya akan dilanjutkan oleh Proses Approval dari pihak kami selama 2 x 24 jam.`,
        buttonText:'Selesai'

    }
    return(
        <SuccessPage success={config} />
    )
}