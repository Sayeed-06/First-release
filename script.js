const blogForm = document.getElementById('blog-form');
const blogLinks = document.getElementById('blog-links');

blogForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('blog-title').value;
  const content = document.getElementById('blog-content').value;


  const filename = `${title.toLowerCase().replace(/\s+/g, '-')}.html`;

  const blogHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; }
        </style>
    </head>
    <body>
        <h1>${title}</h1>
        <p>${content}</p>
        <a href="Bloglist.html">Back to Blog List</a>
        <script>
        $.get("nav.html", function(data){
            $("#nav-placeholder").replaceWith(data);
        });
        </script>
    </body>
    </html>
  `;

  const blob = new Blob([blogHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.textContent = title;

  blogLinks.appendChild(document.createElement('br'));
  blogLinks.appendChild(link);

  blogForm.reset();
});

