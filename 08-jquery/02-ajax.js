$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDOM = (item) => {
    console.log(item);
    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h4>").text(item.name))
        .append($("<p>").text(`by ${item.authors[0]}`))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );
  };

  $.ajax({
    type: "Get",
    url: url,
    success: (data) => {
      for (let book of data) {
        addBookToDOM(book);
      }
    },
    error: (error) => {
      $("#books").append($("<div>").append("<h4>").text("Bad Http Response"));
    },
    complete: () => {
      $("#loading").remove();
    },
  });
});
