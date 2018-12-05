const sideMenuListAfterLogin = [
    {path:'/product', text:'Beli Produk'},
    {path:'/transaction-list', text:'Daftar Transaksi'},
    {path:'/claim-submission', text:'Pengajuan Klaim'},
    {path:'/claim-list', text:'Daftar Klaim'},
    {path:'/profile', text:'Profil'},
    {path:'/change-password', text:'Ubah Password'},
    {path:'/change-mobile-phone', text:'Ubah Nomor Telepon'},
    {path:'/change-email', text:'Ubah Email'},
    {path:'/faq', text:'FAQ'},
    {path:'/about-us', text:'About US'}
]

const sideMenuListAfterLoginAgent = [
    {path:'/product', text:'Beli Produk'},
    {path:'/transaction-list', text:'Daftar Transaksi'},
    {path:'/change-password-agent', text:'Ubah Password'},
    {path:'/faq', text:'FAQ'},
    {path:'/about-us', text:'About US'}
]

const sideMenuList = [
    {path:'/product', text:'Beli Produk'},
    {path:'/faq', text:'FAQ'},
    {path:'/about-us', text:'About US'}

]

let getSideMenuList = (id) => {
    switch (id) {
        case 0:
            return sideMenuList;
        case 1:
            return sideMenuListAfterLogin;
        case 2:
            return sideMenuListAfterLoginAgent;
        default:
            break;
    }
}

let sideMenuService = {
    getSideMenuList
};

export default sideMenuService;