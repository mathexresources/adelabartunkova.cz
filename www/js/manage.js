$('.destroyAlbum').click(function() {
    var albumId = $(this).data('album-id');
    var albumName = $(this).data('album-name');
    if (!confirm('Trvale smazat album "' + albumName + '"? Tato akce je nevratná.')) return;
    $.ajax({
        url: '/api/album.php',
        type: 'POST',
        data: {action: 'destroy', albumId: albumId},
        success: function(result) {
            if (result.success) {
                window.location.reload();
            } else {
                alert(result.message);
            }
        }
    });
});

$('.deleteAlbum').click(function() {
    var albumId = $(this).data('album-id');
    $.ajax({
        url: '/api/album.php',
        type: 'POST',
        data: {
            action: 'delete',
            albumId: albumId,
            data: ''
        },
        success: function(result) {
            console.log(result);
            window.location.reload();

        }
    });
});

$('.createAlbum').click(function() {
    var albumId = $(this).data('album-id');
    $.ajax({
        url: '/api/album.php',
        type: 'POST',
        data: {
            action: 'create',
            albumId: 0,
            data: ''
        },
        success: function(result) {
            console.log(result);
            window.location.replace('/edit?id=' + result.id);

        }
    });
});
