function toggleView() {
  const monthlyPrices = document.getElementsByClassName('monthly');
  const annualPrices = document.getElementsByClassName('annually');

  for (let i = 0; i < annualPrices.length; i++) {
    annualPrices[i].classList.toggle('hidden');
    monthlyPrices[i].classList.toggle('hidden');
    if (annualPrices[i].classList.contains('hidden')) {
      annualPrices[i].style.display = 'none';
      monthlyPrices[i].style.display = 'block';
    } else {
      annualPrices[i].style.display = 'block';
      monthlyPrices[i].style.display = 'none';
    }
  }
}