// https://calculator.swiftutors.com/receivables-turnover-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const receivablesTurnoverRatioRadio = document.getElementById('receivablesTurnoverRatioRadio');
const netCreditSalesRadio = document.getElementById('netCreditSalesRadio');
const averageNetReceivablesRadio = document.getElementById('averageNetReceivablesRadio');

let receivablesTurnoverRatio;
let netCreditSales = v1;
let averageNetReceivables = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

receivablesTurnoverRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Credit Sales';
  variable2.textContent = 'Average Net Receivables';
  netCreditSales = v1;
  averageNetReceivables = v2;
});

netCreditSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Receivables Turnover Ratio';
  variable2.textContent = 'Average Net Receivables';
  receivablesTurnoverRatio = v1;
  averageNetReceivables = v2;
});

averageNetReceivablesRadio.addEventListener('click', function() {
  variable1.textContent = 'Receivables Turnover Ratio';
  variable2.textContent = 'Net Credit Sales';
  receivablesTurnoverRatio = v1;
  netCreditSales = v2;
});

btn.addEventListener('click', function() {
  
  if(receivablesTurnoverRatioRadio.checked)
    result.textContent = `Receivables Turnover Ratio = ${computeReceivablesTurnoverRatio().toFixed(2)}`;

  else if(netCreditSalesRadio.checked)
    result.textContent = `Net Credit Sales = ${computeNetCreditSales().toFixed(2)}`;

  else if(averageNetReceivablesRadio.checked)
    result.textContent = `Average Net Receivables = ${computeAverageNetReceivables().toFixed(2)}`;
})

// calculation

function computeReceivablesTurnoverRatio() {
  return Number(netCreditSales.value) / Number(averageNetReceivables.value);
}

function computeNetCreditSales() {
  return Number(receivablesTurnoverRatio.value) * Number(averageNetReceivables.value);
}

function computeAverageNetReceivables() {
  return Number(netCreditSales.value) / Number(receivablesTurnoverRatio.value);
}