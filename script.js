function updateBanner() {
    let color = document.getElementById("colorPicker").value;
    document.getElementById("banner").style.backgroundColor = color;

    let newText = document.getElementById("textInput").value.trim();
      if (newText !== "") {
        document.getElementById("banner-text").textContent = newText;
    }

    let newImage = document.getElementById("imageSelect").value;
    document.getElementById("banner-img").src = newImage;
}

//Jest test
function changeBannerProperties(color, newText, newImage) {
    const banner = document.getElementById("banner");
    const bannerText = document.getElementById("banner-text");
    const bannerImage = document.getElementById("banner-image");

    if (banner) {
        banner.style.backgroundColor = color;
    }

    if (bannerText) {
        bannerText.textContent = newText;
    }

    if (bannerImage) {
        bannerImage.src = newImage;
    }
}

function setupEventListeners() {
    const button = document.getElementById("changeButton");
    if (button) {
        button.addEventListener("click", function () {
            changeBannerProperties("#ff0000", "New Text", "new-image.jpg");
        });
    }
}


if (typeof document !== "undefined") {
    setupEventListeners();
}


if (typeof module !== "undefined" && module.exports) {
    module.exports = { changeBannerProperties, setupEventListeners};
}


