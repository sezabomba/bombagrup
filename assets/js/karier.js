$('.accordion-collapse').on('shown.bs.collapse', function (e) {
    var $panel = $(this).closest('.accordion-item');
    $('html,body').animate({
        scrollTop: $panel.offset().top-170
    }, 50);
});


function filterJob() {
    let dropdown, filter, accButton, i;
    dropdown = document.getElementById("jobKategori");
    filter = dropdown.value.toUpperCase();
    accButton = document.getElementsByClassName("accordion-button");
    for (i = 0; i < accButton.length; i++) {
        txtValue = accButton[i].textContent || accButton[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == "ALL") {
            accButton[i].parentElement.parentElement.style.display = "";
        } else {
            accButton[i].parentElement.parentElement.style.display = "none";
        }
    }
}