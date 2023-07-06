function filterDireksi() {
  let dropdown1,
    filter1,
    dropdown2,
    filter2,
    accButton,
    i,
    bod,
    emt,
    bodBg,
    bodBpb,
    bodBa,
    bodBll,
    bodBe,
    bodOpco,
    bodPorto;
  dropdown1 = document.getElementById("direksiKategori");
  dropdown2 = document.getElementById("perusahaanKategori");

  filter1 = dropdown1.value.toUpperCase();
  //   filter2 = dropdown2.value.toUpperCase();

  bod = document.querySelectorAll(".bod");
  emt = document.querySelectorAll(".emt");
  bodBg = document.querySelector(".bod-bg");
  bodBpb = document.querySelector(".bod-bpb");
  bodBa = document.querySelector(".bod-ba");
  bodBll = document.querySelector(".bod-bll");
  bodBe = document.querySelector(".bod-be");
  bodOpco = document.querySelector(".bod-opco");
  bodPorto = document.querySelector(".bod-porto");

  if (filter1 == "ALL") {
    bod.forEach(function (node) {
      node.classList.remove("d-none");
    });
    emt.forEach(function (node) {
      node.classList.remove("d-none");
    });
  } else if (filter1 == "BOD") {
    bod.forEach(function (node) {
      node.classList.remove("d-none");
    });
    emt.forEach(function (node) {
      node.classList.add("d-none");
    });
  } else {
    bod.forEach(function (node) {
      node.classList.add("d-none");
    });
    emt.forEach(function (node) {
      node.classList.remove("d-none");
    });
  }

  //   if (filter1 == "BOD" && filter2 == "BG") {
  //     bodBg.classList.toggle("d-none", false);
  //     bodBpb.classList.toggle("d-none", true);
  //     bodBa.classList.toggle("d-none", true);
  //     bodBll.classList.toggle("d-none", true);
  //     bodBe.classList.toggle("d-none", true);
  //     bodOpco.classList.toggle("d-none", true);
  //     bodPorto.classList.toggle("d-none", true);
  //   } else if (filter1 == "BOD" && filter2 == "BPB") {
  //     bodBg.classList.toggle("d-none", true);
  //     bodBpb.classList.toggle("d-none", false);
  //     bodBa.classList.toggle("d-none", true);
  //     bodBll.classList.toggle("d-none", true);
  //     bodBe.classList.toggle("d-none", true);
  //     bodOpco.classList.toggle("d-none", true);
  //     bodPorto.classList.toggle("d-none", true);
  //   } else if (filter1 == "BOD" && filter2 == "BA") {
  //     bodBg.classList.toggle("d-none", true);
  //     bodBpb.classList.toggle("d-none", true);
  //     bodBa.classList.toggle("d-none", false);
  //     bodBll.classList.toggle("d-none", true);
  //     bodBe.classList.toggle("d-none", true);
  //     bodOpco.classList.toggle("d-none", true);
  //     bodPorto.classList.toggle("d-none", true);
  //   } else if (filter1 == "BOD" && filter2 == "BLL") {
  //     bodBg.classList.toggle("d-none", true);
  //     bodBpb.classList.toggle("d-none", true);
  //     bodBa.classList.toggle("d-none", true);
  //     bodBll.classList.toggle("d-none", false);
  //     bodBe.classList.toggle("d-none", true);
  //     bodOpco.classList.toggle("d-none", true);
  //     bodPorto.classList.toggle("d-none", true);
  //   } else if (filter1 == "BOD" && filter2 == "BE") {
  //     bodBg.classList.toggle("d-none", true);
  //     bodBpb.classList.toggle("d-none", true);
  //     bodBa.classList.toggle("d-none", true);
  //     bodBll.classList.toggle("d-none", true);
  //     bodBe.classList.toggle("d-none", false);
  //     bodOpco.classList.toggle("d-none", true);
  //     bodPorto.classList.toggle("d-none", true);
  //   } else if (filter1 == "BOD" && filter2 == "OPCO") {
  //     bodBg.classList.toggle("d-none", true);
  //     bodBpb.classList.toggle("d-none", true);
  //     bodBa.classList.toggle("d-none", true);
  //     bodBll.classList.toggle("d-none", true);
  //     bodBe.classList.toggle("d-none", true);
  //     bodOpco.classList.toggle("d-none", false);
  //     bodPorto.classList.toggle("d-none", true);
  //   } else if (filter1 == "BOD" && filter2 == "PORTO") {
  //     bodBg.classList.toggle("d-none", true);
  //     bodBpb.classList.toggle("d-none", true);
  //     bodBa.classList.toggle("d-none", true);
  //     bodBll.classList.toggle("d-none", true);
  //     bodBe.classList.toggle("d-none", true);
  //     bodOpco.classList.toggle("d-none", true);
  //     bodPorto.classList.toggle("d-none", false);
  //   }
  accButton = document.getElementsByClassName("accordion-button");
  for (i = 0; i < accButton.length; i++) {
    txtValue = accButton[i].textContent || accButton[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter1) > -1 || filter1 == "ALL") {
      accButton[i].parentElement.parentElement.style.display = "";
    } else {
      accButton[i].parentElement.parentElement.style.display = "none";
    }
  }
}
