const selectedText = window.getSelection().toString();

if (selectedText) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
  window.open(searchUrl, "_blank");
} else {
  alert("Please select an MCQ question first.");
}