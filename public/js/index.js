setTimeout(() => {
    $.ajax({
        url: '/user.action',
        method: 'get',
        //返回数组
        success: function(arr) {
            //console.log('data', data);
            //debugger;
            let liStr = JSON.parse(arr).map(function(ele) {
                return '<li>' + ele + '</li>'
            }).join('');

            $('#root').html(liStr);
        },
        error: function(error) {
            console.log('error', error);
        }
    })
}, 1000)
