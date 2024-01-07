$(function () {
  $('#sendPoll').click(() => {
    let TPP = $('#TPPinput').val();
    let DPP = $('#DPPinput').val();
    let KMT = $('#KMTinput').val();
    if(TPP == '' || DPP == '' || KMT == '')
    {
      alert('請輸入值！！')
      return;
    }
    TPP = parseInt(TPP);
    DPP = parseInt(DPP);
    KMT = parseInt(KMT);
    if(TPP < 0 || DPP < 0 || KMT < 0)
    {
      alert('請輸入正值！！')
      return;
    }
    $.post(
      '/addPoll/' + TPP + '/' + DPP + '/' + KMT
    )
    window.location.href = '/poll';
  })
}
)