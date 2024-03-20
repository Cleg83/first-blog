// const lyrics = [
//   `"Nobody here can dance like me, everybody's clapping on the one and the three"`,
//   `"I don't expect you to break out in song cos' I know that you can't carry a tune"`,
//   `"They raised up a son that could eat up his weight in groceries. Named him after a man of the cloth, called him Amos Moses"`,
//   `"They got a name for all the winners in the world, I want a name when I lose"`,
//   `"An assault my defences systematically failed to withstand"`
//   // Add more lyrics as needed
// ];

// // Get the container element
// const lyricsContainer = document.getElementById('lyrics-container');

// // Function to display lyrics with animation
// function displayLyricsWithAnimation() {
//   // Get a random lyric from the array
//   const randomIndex = Math.floor(Math.random() * lyrics.length);
//   const lyric = lyrics[randomIndex];
  
//   // Display the lyric with animation
//   lyricsContainer.textContent = lyric;
//   lyricsContainer.classList.remove('animate'); // Remove animation class
//   void lyricsContainer.offsetWidth; // Trigger reflow
//   lyricsContainer.classList.add('animate'); // Add animation class to trigger animation
// }

// // Display initial lyric
// displayLyricsWithAnimation();

// // Change lyric every 7.5 seconds
// setInterval(displayLyricsWithAnimation, 7500);

const headings = document.getElementById('heading');

const innerPageContent = [
  {
    text: `
      <p>Thank you for visiting my website.</p> 
      <br>
      <p>This is my first attempt at building a site using JavaScript so hopefully it's not terrible.</p>
      <br>
      <p>I will be updating my blog weekly (at least) and hope to incorporate more interactivity as my skills progress.</p> 
      <br>
      <p>As one of my favourite YouTubers says, "Thanks for popping by."</p>
    `
  },
  {
    text: `
      <p>I'm 40, stuck in a job that's going nowhere and pathetically clinging onto the dreams of my youth.</p> 
      <br>
      <p>Well, that's not completely true. I am 40 and stuck in a job that's going nowhere but I have found some motivation and a new love, coding.</p>
      <br>
      <p>I'm a musician who has played many shows in the UK and Europe and also enjoy tinkering with a little woodworking.</p> 
      <br>
      <p>Other than those things, I'm incredibly dull.</p>
    `
  },
  {
    text: `
      <form id="contact-form">
        <input type="text" value="Name">
        <input type="email" value="Email">
        <textarea ></textarea>
        <input type="submit">
      </form>          
    `
  },
]

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const pageContent = document.getElementById("content-box");

function displayHomePage () {
  pageContent.innerHTML = innerPageContent[0].text;
  headings.innerText = "Welcome to my site";
  button2.innerText = "About";
};

button1.addEventListener('click', function() {
  displayHomePage();
});

function displayAboutPage () {
  pageContent.innerHTML = innerPageContent[1].text;
  headings.innerText = "Who am I?";
  button2.innerText = "Bonus"; 
};

button2.addEventListener('click', function() {
  displayAboutPage();
});

function displayContactPage () {
  pageContent.innerHTML = innerPageContent[2].text;
  headings.innerText = "How can I help?";
}

button4.addEventListener('click', function() {
  displayContactPage();
});