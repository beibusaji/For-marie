function showMessage() {
  var message = document.getElementById('secretMessage');
  if (message.style.display === 'none') {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
}
