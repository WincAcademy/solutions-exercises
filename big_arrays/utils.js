// The callback we pass into array.sort officially should return 1, 0 or -1
// Firefox does this conversion itself.
// Chrome needs this helper.
const sort_helper = result => {
  // We can make this shorter with a ternary.
  if (result) {
    return 1;
  } else {
    return -1;
  }
};

const emptyResultList = () =>
  (document.querySelector(".results").innerHTML = "");

const addToResultList = li =>
  document.querySelector(".results").appendChild(li);

const emptyButtonList = () =>
  (document.querySelector(".sub_buttons").innerHTML = "");

const addToButtonList = button =>
  document.querySelector(".sub_buttons").appendChild(button);

const emptyUI = () => {
  emptyResultList();
  emptyButtonList();
};
