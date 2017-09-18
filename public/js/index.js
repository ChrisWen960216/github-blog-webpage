setTimeout(() => {
    $.ajax({
        url: '/user.action',
        method: 'get',
        //返回数组
        success: function(arr) {
            //console.log('data', data);
            //debugger;
            let liStr = arr.map(function(ele) {
                return '<li>' + ele + '</li>'
            }).join('');

            $('#root').html(liStr);
        },
        error: function(error) {
            console.log('error', error);
        }
    })
    //模拟post
    $.ajax({
        url: '/list.action',
        method: 'post',
        headers: {
            "Content-Type": 'application/json'
        },
        data: JSON.stringify([
            'name', 'ChristianWen'
        ]),
        //返回数组
        success: function(arr) {
            //console.log('data', data);
            //debugger;
            let liStr = arr.map(function(ele) {
                return '<li>' + ele + '</li>'
            }).join('');
            $('#shop-list').html(liStr);
        },
        error: function(error) {
            console.log('error', error);
        }
    })
}, 1000)
