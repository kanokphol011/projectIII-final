$(function () {
    $.ajax({
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products"
        
    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            //var row = '<tr><td><a href="edit.html?id=' + data[i].id + '">' + data[i].name + '</a></td><td>' + data[i].description + '</td><td>' + data[i].photo + '</td><td>' + data[i].price + '</td></tr>';
            //var row = '<div class="gellery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{' + data[i].photo + '}}" alt="{{caption}}" class="img-fluid"></a></div>';
            //var row = '<div class="col-lg-6 gellery"><tr><img src="' + data[i].photo + '" class="rounded" alt="Cinque Terre" width="200" height="200"></tr> <div><tr><a>' + data[i].name + '</a></tr></div> <div><tr><a>' + data[i].price + '</a></tr></div></div>';
            var row = '<div class="col-sm-4"><div class="product-image-wrapper"><div class="single-products"><div class="productinfo text-center"><img src="' + data[i].photo + '" alt="" width="200" height="200" /><h2>' + data[i].price + '</h2><p>' + data[i].name + '</p><a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';

            $('#pinlist').append(row);
        }
        
    }

});