const btn = document.getElementById("btn");

// function for web share api
function webShareAPI(header, description, link) {
  navigator
    .share({
      title: header,
      text: description,
      url: link,
    })
    .then(() => console.log("Successful share"))
    .catch((error) => console.log("Error sharing", error));
}

if (navigator.share) {
  // Show button if it supports webShareAPI
  btn.style.display = "block";
  btn.addEventListener("click", () =>
    webShareAPI("header", "description", "www.url.com")
  );
} else {
  // Hide button if it doesn't supports webShareAPI
  btn.style.display = "none";
  console.error("Your Browser doesn't support Web Share API");
}