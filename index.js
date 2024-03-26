// Code your solutions in this file
// Function to generate thank you messages
function writeCards(namesArray) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push("Thank you, " + namesArray[i] + ", for the wonderful surprise gift!");
    }
    return thankYouMessages;
  }
  
  // Function to count down from a given number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage
  const names = ["Guadalupe", "Ollie", "Aki"];
  const thankYouMessages = writeCards(names);
  console.log(thankYouMessages);
  
  countDown(5);
  