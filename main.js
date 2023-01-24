var data = [

    {
        category: "maroc",
        imgSrc: "./images/maroc 1.PNG"
    }, {
        category: "maroc",
        imgSrc: "./images/maroc 2.PNG"
    }, {
        category: "maroc",
        imgSrc: "./images/maroc 3.PNG"
    }, {
        category: "maroc",
        imgSrc: "./images/maroc 4.PNG"
    }, {
        category: "tunisia",
        imgSrc: "./images/tunisia 1.PNG"
    }, {
        category: "tunisia",
        imgSrc: "./images/tunisia 2.png"
    }, {
        category: "tunisia",
        imgSrc: "./images/tunisia 3.PNG"
    }, {
        category: "tunisia",
        imgSrc: "./images/tunisia 4.PNG"
    }, {
        category: "alger",
        imgSrc: "./images/alger1.PNG"
    }, {
        category: "alger",
        imgSrc: "./images/alger 2.PNG"
    }, {
        category: "alger",
        imgSrc: "./images/alger 3.PNG"
    }, {
        category: "alger",
        imgSrc: "./images/alger 4.PNG"
    }, {
        category: "egy",
        imgSrc: "./images/egy 1.PNG"
    }, {
        category: "egy",
        imgSrc: "./images/egy 2.PNG"
    }, {
        category: "egy",
        imgSrc: "./images/egy 3.PNG"
    }, {
        category: "egy",
        imgSrc: "./images/egy 4.png"
    },


];
var each = function(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    } else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function(array, predicate) {
    var acc = [];
    each(array, function(e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}
each(data, function(elem, i) {
    var div = $("<div></div>")
    div.attr("id", i)
    div.attr("class", "grid-item")
    var img = $("<img />")
    img.attr("id", i)
    img.attr("src", elem.imgSrc)
    div.append(img)
    $(".container").append(div)
})
$(".searchButton").on('click', function(e) {
    if ($(".searchTerm").val() === "tunisia") {
        window.location.href = ("./tun.html")

    } else
    if ($(".searchTerm").val() === "egypt") {
        window.location.href = ("./egy.html")

    } else
    if ($(".searchTerm").val() === "maroc") {
        window.location.href = ("./maroc.html")

    } else
    if ($(".searchTerm").val() === "alger") {
        window.location.href = ("./alger.html")

    }

})

// $(".container").empty()
// each(dataFilter, function(elem, i) {
//     $(".container").append('<div id="' + i + '" class="grid-item"><img id="img' + i + '" src="' + elem.imgSrc + '"/></div>')
// })








// $(".grid-container").append("<div class='grid-item'><img src='./images/egy 4.png'</div>");