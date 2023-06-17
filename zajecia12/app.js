let BASE_URL = "http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php";
let lastNews = [];

$(document).ready(function() {
  function fetchData() {
    $.getJSON(BASE_URL, function(data) {
      if (JSON.stringify(data) !== JSON.stringify(lastData)) {
        if (lastData == null) {
          updateStockTable(data.stock);
          updateRotator(data.news);
          lastData = data;
        } else {
          updateStockTable2(data.stock, lastData.stock);
          updateRotator(data.news);
          lastData = data;
        }
        updateLastNews(data.news);
      }
    });
  }

  function updateStockTable(stockData) {
    let tableBody = $("#stock-table tbody");
    tableBody.empty();

    $.each(stockData, function(firma, kurs) {
      let row = "<tr><td>" + firma + "</td><td>" + kurs + "</td></tr>";
      tableBody.append(row);
    });
  }

  function updateStockTable2(stockData, lastData) {
    let tableBody = $("#stock-table tbody");
    tableBody.empty();
    $.each(stockData, function(firma, kurs) {
      $.each(lastData, function(firma2, kurs2) {
        if (firma == firma2 && kurs == kurs2) {
          let row = "<tr><td>" + firma2 + "</td><td>" + kurs2 + "</td></tr>";
        }
      });
      let row = "<tr><td>" + firma + "</td><td>" + kurs + "</td></tr>";
      tableBody.append(row);
    });
  }

  function updateRotator(newsData) {
    let rotator = $("#rotator");
    let currentNews = rotator.text();
    let newsArray = [currentNews, newsData].filter(Boolean);

    if (newsArray.length > 1) {
      let index = newsArray.indexOf(currentNews);
      let nextIndex = (index + 1) % newsArray.length;
      rotator.text(newsArray[nextIndex]);
    } else {
      rotator.text(newsData);
    }
  }

  function updateLastNews(newsData) {
    lastNews.push(newsData);
    if (lastNews.length > 3) {
      lastNews.shift();
    }
    let newsSection = $("#news");
    newsSection.empty();
    newsSection.append("<h2>Last 3 news:</h2>");
    for (let i = lastNews.length - 1; i >= 0; i--) {
      newsSection.append("<p>" + lastNews[i] + "</p>");
    }
  }

  fetchData();
  setInterval(fetchData, 10000);
});
