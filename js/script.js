// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara
// Created on: May 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // define numbers
  const number = parseInt(document.getElementById("your-number").value)
  const sum = (number / 2) * (number + 1)
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + sum
}