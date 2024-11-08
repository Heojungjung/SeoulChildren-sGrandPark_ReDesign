/* Include Header */
fetch("/include/header.html")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.querySelector('.header-include').innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching header:', error);
  });

/* Include Footer */
fetch("/include/footer.html")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching footer:', error);
  });