function updateBanner() {
    // Change background color
    let color = document.getElementById("colorPicker").value;
    document.getElementById("banner").style.backgroundColor = color;

    // Change banner text
    let newText = document.getElementById("textInput").value.trim();
      if (newText !== "") {
        document.getElementById("banner-text").textContent = newText;
    }

    // Change banner image
    let newImage = document.getElementById("imageSelect").value;
    document.getElementById("banner-img").src = newImage;
}
