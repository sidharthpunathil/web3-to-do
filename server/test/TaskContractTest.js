// const {expect} = require("chai");
// const {expect, ethers} = require("hardhat");

// describe("Task Contract", function() {
//    let TaskContract;
//    let taskContract;
//    let owner;

//    const NUM_TOTAL_TASKS = 5;

//    let totalTasks;
//    this.beforeEach(async function(){
//       TaskContract = await ethers.getContractFactory("TaskContract");
//       [owner] = await ethers.getSigners();
//       taskContract = await TaskContract.deploy();

//       totalTasks = [];

//       for(int i=0; i<NUM_TOTAL_TASKS; i++) {
//          let task = {
//             'taskText': 'Task num'
//          }
//       }
//    })
// })