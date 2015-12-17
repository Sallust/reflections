/* their response */
    var nytimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=461181eda2d9ab0693789e8d7c5b8a6c:5:73790621'

    $.getJSON(nytimesURL, function(data) {
        $nytHeaderElem.text('New York Times articles about' + city)
        var articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' +
                '<a href="'+ article.web_url+ '">'+ article.headline.main+
                '</a>' +
                '<p>'+ article.snippet + '</p>'+
                '</li>')

        };
    })