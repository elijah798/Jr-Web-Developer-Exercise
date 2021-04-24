//for loop to create a table of alternating squares of rectangles
for (let i = 0; i < 3; i++) {
  for (let x = 0; x < 5; x++) {
    //created each div element for horizontal and vertical squares and rectangles
    var horizontalBlock = document.createElement("div");
    horizontalBlock.className = "horizontal";

    var horizontalBlockRect1 = document.createElement("div");
    horizontalBlockRect1.className = "rect1Horizontal";
    var horizontalBlockRect2 = document.createElement("div");
    horizontalBlockRect2.className = "rect2Horizontal";

    var verticalBlock = document.createElement("div");
    verticalBlock.className = "vertical";

    var verticalBlockRect1 = document.createElement("div");
    verticalBlockRect1.className = "rect1Vertical";
    var verticalBlockRect2 = document.createElement("div");
    verticalBlockRect2.className = "rect2Vertical";

    document.getElementById("container").appendChild(horizontalBlock);
    horizontalBlock.appendChild(horizontalBlockRect1);
    horizontalBlock.appendChild(horizontalBlockRect2);

    document.getElementById("container").appendChild(verticalBlock);
    verticalBlock.appendChild(verticalBlockRect1);
    verticalBlock.appendChild(verticalBlockRect2);
  }

  //for loop that alternates the pattern of horizontal and vertical squares.
  for (let x = 0; x < 5; x++) {
    var horizontalBlock = document.createElement("div");
    horizontalBlock.className = "horizontal";
    var horizontalBlockRect1 = document.createElement("div");
    horizontalBlockRect1.className = "rect1Horizontal";
    var horizontalBlockRect2 = document.createElement("div");
    horizontalBlockRect2.className = "rect2Horizontal";

    var verticalBlock = document.createElement("div");
    verticalBlock.className = "vertical";

    var verticalBlockRect1 = document.createElement("div");
    verticalBlockRect1.className = "rect1Vertical";
    var verticalBlockRect2 = document.createElement("div");
    verticalBlockRect2.className = "rect2Vertical";

    document.getElementById("container").appendChild(verticalBlock);
    verticalBlock.appendChild(verticalBlockRect1);
    verticalBlock.appendChild(verticalBlockRect2);

    document.getElementById("container").appendChild(horizontalBlock);
    horizontalBlock.appendChild(horizontalBlockRect1);
    horizontalBlock.appendChild(horizontalBlockRect2);

    
  }
}

//array of colors for use in the random color generation
var colors = ["white", "red", "blue", "yellow"]


//function to get a random number
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }
//function to get a random rectangle
  function getRandomRectangle(rectangles) {
      return rectangles[getRandomNum(2)]
  }

  // Added an event listener to check when square is clicked
document.getElementById("container").addEventListener("click",(e) => {
  //creates an array of the elements in the square
    let rectangles = e.target.parentElement.children;
    
    //randomly generates a color for a random rectangle
    var rectangle = getRandomRectangle(rectangles).style.background = colors[getRandomNum(4)];
    
  //while loop to make sure there is atleast one white rectangle in each square
  if( rectangles[0].style.background !== "white" && rectangles[1].style.background !== "white" ){
    while( rectangles[0].style.background !== "white" && rectangles[1].style.background !== "white" ){
       let i = getRandomRectangle(rectangles).style.background = colors[getRandomNum(3)];
       
    }}




})


