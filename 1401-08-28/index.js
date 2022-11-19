let row, col

row = window.prompt('Enter the number of rows')

col = window.prompt('Enter the number of columns')

table = document.getElementById('table')

for (let i = 0; i < row; i++) {
  tr = document.createElement('tr')
  for (let j = 0; j < col; j++) {
    td = document.createElement('td')
    td.textContent = (i + 1) * (j + 1)  
    tr.appendChild(td)
  }
  table.appendChild(tr)
}
