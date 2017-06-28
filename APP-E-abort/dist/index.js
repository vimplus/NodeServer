
$(function () {
    $('#submitForm').on('click',function () {
        var username = $('#username').val()
        var xhr = $.ajax({
            url:'/api/update',
            type: 'POST',
            data: {
                username: username
            },
            success: function (res) {
                console.log(res)
            }
        })
        xhr.abort();
        return false;
    })
})
