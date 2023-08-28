fetch('users.json')
  .then(response => response.json())
  .then(data => {
    var template = `
      <h2>User List</h2>
      <ul>
        ${data.map(user => `<li>Email: ${user.email}, Password: ${user.password}</li>`).join('')}
      </ul>`;
    document.getElementById('users-list').innerHTML = template;
  })
  .catch(error => {
    document.getElementById('users-list').innerHTML = '<p>Error loading users.</p>';
  });
