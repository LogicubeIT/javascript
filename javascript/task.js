function filterObject(objects){
    //I've created a new date object here
    let dateLimit = new Date();
    //I've substracted 7 days from the current date
    dateLimit.setDate(dateLimit.getDate() - 7);
  // I've used the inbuilt filter method to create a new array with objects that pass the test
    let filteredObj = objects.filter(objects => {
      let date = new Date(objects.date);
        //I've placed a check to see if value greater or not and date is later or equal  to the dateLimit
      return objects.value > 100 && date >= dateLimit;
    });
    return filteredObj;
  }
  
  let objects = [
    { id: 1, name: "Task 1", value: 120, date: "2023-11-15" },
    { id: 2, name: "Task 2", value: 90, date: "2023-11-20" },
    { id: 3, name: "Task 3", value: 150, date: "2023-11-25" },
  ];
  
  let result = filterObject(objects);
  console.log(result);
  