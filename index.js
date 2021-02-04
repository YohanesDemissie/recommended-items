const recommendedItemOne = document.getElementById("recommended-item-1");
recommendedItemOne.addEventListener("click", itemOnePage);

const recommendedItemTwo = document.getElementById("recommended-item-2");
recommendedItemTwo.addEventListener("click", itemTwoPage);

const recommendedItemThree = document.getElementById("recommended-item-3");
recommendedItemThree.addEventListener("click", itemThreePage);

const recommendedItemFour = document.getElementById("recommended-item-4");
recommendedItemFour.addEventListener("click", itemFourPage);

function itemOnePage() {
  window.open("https://www.amazon.com/Puppy-Time-Neil-Ben/dp/B07VPV9FVM/ref=sr_1_2?dchild=1&keywords=puppies&qid=1612400978&sr=8-2");
}

function itemTwoPage() {
    window.open("https://www.amazon.com/gp/video/detail/B07F6TYCXZ/ref=atv_dp_amz_det_c_UTPsmN_1_1");
  }

function itemThreePage() {
  window.open("https://www.amazon.com/gp/video/detail/B07Y6N7D6F/ref=atv_dp_amz_det_c_UTPsmN_1_2");
}

function itemFourPage() {
    window.open("https://www.amazon.com/gp/video/detail/B00C3NVA7Y/ref=atv_dp_amz_det_c_UTPsmN_1_7");
}
