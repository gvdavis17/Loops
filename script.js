// LOOPS EXERCISE
// 1
for (i = 1; i <= 7; i++){
    console.log(i);
  }
  // OR
  // for (i = 1; i < 8; i++){
  //   console.log(i);
  // }
  
  console.log(`=============`);
  
  // 2
  for (i = 5; i <= 25; i += 4){
    console.log(i);
  }
  // OR
  // for (i = 5; i < 26; i += 4){
  //   console.log(i);
  // }
  
  console.log(`=============`);
  
  // 3a
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  // 3b
  for (item of wizards){
    console.log(item);
  }
  
  console.log(`=============`);
  
  // 4a
  let harryPotterMovies = 0;
  
  // 4b
  while (harryPotterMovies <= 7){
    // console.log(harryPotterMovies);
    harryPotterMovies++;
  }
  // OR
  // while (true){
  //   if (harryPotterMovies <= 8) {
  //     harryPotterMovies++;
  //   } else {
  //     break;
  //   }
  // }
  
  // 4c
  console.log(harryPotterMovies);
  
  console.log(`=============`);
  
  // BONUS
  // 5a
  const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];
  
  // 5b
  for (house of hogwartsHouses){
    for (char of house){
      console.log(char);
    }
  }
  
  console.log(`=============`);
  
  // 6a
  const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
  ];
  
  // 6b
  // Using A For Loop
  let magicQuote = ``;
  for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`;
    // magicQuote = `${magicQuote} ${quote[i]}`;
    // console.log(magicQuote);
  }
  magicQuote = magicQuote.trim();
  console.log(magicQuote);
  
  // OR
  
  // Using A For Of Loop
  // let message = ``;
  // for (word of quote){
  //   message += ` ${word}`;
  // }
  // message = message.trim();
  // console.log(message);
  
  console.log(`=============`);
  
  // 7
  // Using Else Ifs
  for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("Expecto Patronum");
    } else if (i % 3 === 0){
      console.log("Expecto");
    } else if (i % 5 === 0){
      console.log("Patronum");
    } else {
      console.log(i);
    }
  }
  // OR
  // Using Nested Conditional Statements
  // for (i = 1; i <= 25; i++){
  //   if (i % 3 === 0 && i % 5 === 0){
  //     console.log("Expecto Patronum");
  //   } else {
  //     if (i % 3 === 0) {
  //       console.log("Expecto");
  //     } else {
  //       if (i % 5 === 0) {
  //         console.log("Patronum");
  //       } else {
  //         console.log(i);
  //       }
  //     }
  //   }
  // }