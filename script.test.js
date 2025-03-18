/** 
 *@jest-environment jsdom
 */

// Mock the DOM before requiring the script
document.body.innerHTML = `
    <div id="banner">
        <p id="banner-text">Original Text</p>
        <img id="banner-image" src="original.jpg" />
    </div>
    <button id="changeButton"></button>
`;

 const { changeBannerProperties, setupEventListeners  } = require("./script");

 setupEventListeners();

 test("changes banner properties", () => {
    document.getElementById("changeButton").click();
    
    expect(document.getElementById("banner").style.backgroundColor).toBe("rgb(255, 0, 0)");
    expect(document.getElementById("banner-text").textContent).toBe("New Text");
    expect(document.getElementById("banner-image").src).toContain("new-image.jpg");
});

 

