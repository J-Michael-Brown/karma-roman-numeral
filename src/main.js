import { numberColumnParser } from './roman';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var trojanHorse = $("#romans").val();
    var romanNumeral = numberColumnParser(trojanHorse);

    $(".error-message").hide();
    if (parseInt(trojanHorse) >= 4000) {
      $("#tooBig").show();
    } else if (parseInt(trojanHorse) < 0) {
      $("#tooLittle").show();
    } else if (!parseInt(trojanHorse)) {
      $("#justWrong").show();
    } else {
      $(".charriot").slideDown(5000);
      $("#roman-numeral").text(romanNumeral).show();

    }
  })

    // console.log()
});
