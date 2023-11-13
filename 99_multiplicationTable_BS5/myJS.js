document.write('<table class="table table-bordered border-dark text-center">');
for(let i = 1; i <= 9; ++i)
{
  document.write('<tr>');
  if(i == 1)
    document.write('<td colspan="9" class="table-warning"><h1>99乘法表 江至揚 B0222963</h1></td>');
  else
  {
    for(let j = 1; j <= 9; ++j)
    {
      if(j % 2 == 1)
        document.write('<td class="table-secondary table-bordered border-dark">');
      else
        document.write('<td class="table-default table-bordered border-dark">');
      document.write(j + '*' + i + '=' + j*i + '</td>');
    }
  }
  document.write('</tr>');
}
document.write('</table>');