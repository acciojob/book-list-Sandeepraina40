//your JS code here. If required.

// Grab references to inputs and table body
const titleInput  = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput   = document.getElementById('isbn');
const submitBtn   = document.getElementById('submit');
const bookList    = document.getElementById('book-list');

// Add book on submit
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload

  // Get values from inputs
  const title  = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn   = isbnInput.value.trim();

  // Basic validation
  if (!title || !author || !isbn) {
    alert('Please fill in all fields');
    return;
  }

  // Create a new row
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append row to table
  bookList.appendChild(row);

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
});

// Delete book row when Clear button is clicked
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove(); // Remove the row
  }
});

