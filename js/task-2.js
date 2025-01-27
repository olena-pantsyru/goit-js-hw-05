const getUsersWithFriend = (users, friendName) => 
    users.filter(user => user.friends.includes(friendName));
  
  const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  

  console.log(getUsersWithFriend(allUsers, "Briana Decker"));
  
  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));

  console.log(getUsersWithFriend(allUsers, "Adrian Cross")); 
