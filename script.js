/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  
  function PrintDeveloperswithMap() {
    //Write your code here
    arr.map((item) => {
        let prof = undefined;
        prof = item?.profession;
        if (prof == 'developer') {
            console.log(item);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here
    arr.forEach((item) => {
        let prof = undefined;
        prof = item?.profession;
        if (prof == 'developer') {
            console.log(item);
        }
    });
  }
  
  function addData() {
    //Write your code here
    let data = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(data);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here
    arr.forEach((item,index) => {
        let prof = undefined;
        prof = item?.profession;
        if(prof == 'admin'){
            arr.splice(index,1);
        }
    });
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here
    let newArr = [
        { id: 4, name: "johny", age: "23", profession: "developer" },
        { id: 5, name: "jacky", age: "25", profession: "developer" },
        { id: 6, name: "carry", age: "20", profession: "trainie" },
      ];

    arr = arr.concat(newArr);
    console.log(arr);
  }
