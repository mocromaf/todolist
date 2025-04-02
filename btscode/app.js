document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emoji = document.getElementById('emoji').value;
    
    if (firstName && lastName && emoji) {
      
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('emoji', emoji);
      
      window.location.href = 'revisions.html';  
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
  