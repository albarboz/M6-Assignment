window.addEventListener('load', () => {
  const form = document.getElementById('empForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const ext = document.getElementById('ext').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}`);
  });
});
