// alert('connected')

const discountBtn = document.getElementById("discBtn");
let discountAmount;
const showDiscountAmount = document.getElementById("discount-amount");

// wiil get the input value from input field
const getInputValue = (id) => {
  return document.getElementById(id).value;
};

// reset the vaule of input field
const resetValue = () => {
  document.getElementById("total_amount").value = "";
  document.getElementById("cupon_code").value = "";
  discountBtn.disabled = true;
};

// get the discount amount when user click discount button
const dicuontAction = () => {
  let totalAmount = parseInt(getInputValue("total_amount"));
  let cuponCode = getInputValue("cupon_code");

  console.log(totalAmount);

  if (cuponCode === "DISC30") {
    if (!Number.isInteger(totalAmount)) {
    //   console.log("tigered");
      discountAmount = `<span style="color: red;">Invalid Input</span>`;
    } else {
      discountAmount = `<span style="color: green;">Discount Amount: ${
        totalAmount - (totalAmount * 30) / 100
      }</span>`;
    }
  }

  showDiscountAmount.innerHTML = discountAmount;
  resetValue();
};

// click event for discount button
discountBtn.addEventListener("click", dicuontAction);

// will disable or enable the button click state
document.getElementById("cupon_code").addEventListener("keyup", (e) => {
  // console.log(e.target.value);

  let cuponCode = getInputValue("cupon_code");

  if (cuponCode === "DISC30") {
    discountBtn.disabled = false;
  } else discountBtn.disabled = true;
});
