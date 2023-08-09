$(".bingo-card__item").on('click', function() {
  $(this).toggleClass('active');
});

$('.clear-button').on('click', function(){
	$('.bingo-card__item').removeClass('active');
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
});


$('.NewCard-button').on('click', function(){
  const bingoCard = document.getElementById("bingo-card");
  const bingoItems = Array.from(bingoCard.getElementsByClassName("bingo-card__item"));
  const freeSpaceItem = bingoCard.querySelector(".free-space");

  // Remove the free space item from the array
  const index = bingoItems.indexOf(freeSpaceItem);
  if (index !== -1) {
    bingoItems.splice(index, 1);
  }

  shuffleArray(bingoItems);

  // Insert shuffled items before and after the free space item
  const halfIndex = Math.ceil(bingoItems.length / 2);
  bingoItems.forEach((item, idx) => {
    if (idx < halfIndex) {
      bingoCard.insertBefore(item, freeSpaceItem);
    } else {
      bingoCard.insertBefore(item, freeSpaceItem.nextSibling);
    }
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const bingoCard = document.getElementById("bingo-card");
  const bingoItems = Array.from(bingoCard.getElementsByClassName("bingo-card__item"));
  const freeSpaceItem = bingoCard.querySelector(".free-space");

  // Remove the free space item from the array
  const index = bingoItems.indexOf(freeSpaceItem);
  if (index !== -1) {
    bingoItems.splice(index, 1);
  }

  shuffleArray(bingoItems);

  // Insert shuffled items before and after the free space item
  const halfIndex = Math.ceil(bingoItems.length / 2);
  bingoItems.forEach((item, idx) => {
    if (idx < halfIndex) {
      bingoCard.insertBefore(item, freeSpaceItem);
    } else {
      bingoCard.insertBefore(item, freeSpaceItem.nextSibling);
    }
  });
});
