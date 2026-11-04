// 🛠️ CENTRAL CONFIGURATION: Put your real Instagram link here!
const instagramProfileUrl = "https://instagram.com/tullowmountaineeringclub/";

// Wait until the browser fully reads and constructs the HTML document
document.addEventListener("DOMContentLoaded", () => {
  // Find every element on the website with the class 'instagram-target-link'
  const instagramLinks = document.querySelectorAll(".instagram-target-link");

  // Dynamically update the href property for all targets safely
  instagramLinks.forEach((link) => {
    link.href = instagramProfileUrl;
  });
  //test

  console.log(
    `Trail Blazer Pipeline: Linked navigation tunnels to ${instagramProfileUrl}`,
  );
});
