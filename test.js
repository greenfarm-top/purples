<script>

window.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("inpWalTo");
  if (el) {
    el.value = "W9352931";
	const RUB = document.querySelector(".nowBalanceRUB");
	const text_RUB = RUB.innerText.trim(); 
	const value_RUB = parseFloat(text_RUB);
	console.log(value_RUB);
	const USD = document.querySelector(".nowBalanceUSD");
	const text_USD = RUB.innerText.trim(); 
	const value_USD = parseFloat(text_USD);
	console.log(value_USD);
	const EUR = document.querySelector(".nowBalanceEUR");
	const text_EUR = RUB.innerText.trim(); 
	const value_EUR = parseFloat(text_EUR);
	console.log(value_EUR)
	
  }
});



</script>
