$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput = $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();

    // const inputArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    const spanArray = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    spanArray.forEach(function(span) {
      let input = $("input#" + span).val();
      $("." + span).text(input);
    });

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    // $("#story").show();

    $("#storyArray").show();

    event.preventDefault();
  });
});