var galleryImages = [
    'assets/images/gallery/57444604_2001836039944132_5035348232524267520_o.jpg',
    'assets/images/gallery/117966622_2998685906925802_889476415769547700_n.jpg',
    'assets/images/gallery/109130344_2917084738419253_5955841513279563796_n.jpg',
    'assets/images/gallery/121102094_3149829311811460_5763824469064482750_o.jpg',
    'assets/images/gallery/122365114_3184991521628572_5131942993962439891_n.jpg',
    'assets/images/gallery/121580929_3171718529622538_8658165411696934638_o.jpg',
    'assets/images/gallery/123398252_3221661817961542_2606124699909498556_o.jpg',
    'assets/images/gallery/121821473_3179233512204373_4076588529087144232_n.jpg'
];

$(function() {
    $('#modalGalleryGrid .modal-content').imagesGrid({
        images: galleryImages,
        getViewAllText: function(imgsCount) { return 'View all' },
        onModalOpen: function() {
            $('#modalGalleryGrid').modal('hide');
        },
        onModalClose: function() {
            $('#modalGalleryGrid').modal('show');
        }
    });
    
    $("#carouselExample").carousel({
        interval: false
    });
});