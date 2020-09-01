let currentHour = moment().format("HH");

$(document).ready(function () {
  const hour = $(".hour").text("");
  let time = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
  console.log(time);
  console.log(moment().format("h"));
  console.log(currentHour);



//   created header with Date
  $(".container").empty();
  const $header = $("<nav>");
  $header.attr("class", "header row");
  const $insideHeader = $("<div>");
  $insideHeader.attr("class", "col-11 mg-1 align-middle");
  const $date = $("<h2>");
  $date.attr('class', 'align-middle');
  $date.text(time);
  $insideHeader.append($date);
  $header.append($insideHeader);
  $(".container").append($header);
  const $todos = $('<div>');

  function createBoxes() {
    // create Boxes
    for (let i = 0; i < 24; i++) {
      // hour box
      const $hourBox = $("<div>");
      let hourBox = $hourBox.text(`${i}00`);
      $hourBox.attr("class", "hour col-2 float-left");
      // input
      const $input = $("<input>");
      $input.attr({
        type: "text",
        placeholder: "Enter To-Do's Here!",
        class: "text col-9 float-left textarea",
      });
      // button
      const $button = $("<button>");
      $button.attr("class", "saveBtn col-1 float-left").text('save');

      // everything put together
      const $task = $("<div>");
      $task.attr("class", "row task");
      $task.append($hourBox, $input, $button);
      // putting it in the container
      $todos.attr('class', 'todos');
      $todos.append($task);
      $(".container").append($todos);


      // Function colors the hour blocks
      function pastPresent() {
        console.log(hourBox);
        let hourCounter = `${currentHour}00`;
        console.log(hourCounter);
        console.log(hourBox.text());
        if (parseInt(hourBox.text()) < parseInt(hourCounter)) {
          $($input).addClass("bg-dark");
        } else if (parseInt(hourBox.text()) == parseInt(hourCounter)) {
          $($input).addClass("present");
        } else {
          $($input).addClass("future");
        }
      }

      pastPresent();
    }
  }

  createBoxes();

//   secondTick();


  $(document).on('click', '.saveBtn', function(e){
        e.preventDefault();
      //   console.log($('.text').text());
        let tasks = $('.text').val().trim();
        console.log(tasks);
      //   todos = JSON.parse(localStorage.getItem()) || [];
      //   todos.push(data);
      //   alert(todos);
        localStorage.setItem('.header', tasks);
        // Should be something like [Object array]
        // Re-serialize the array back into a string and store it in localStorage   
  });

  // I want the page to render all fields
  // Create a funtion to change the time of the
});
