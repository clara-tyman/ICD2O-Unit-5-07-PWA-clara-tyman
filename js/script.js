// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-5-07-PWA-clara-tyman/sw.js", {
    scope: "/ICD2O-Unit-5-07-PWA-clara-tyman/",
  })
}

function myButtonClicked() {
  // define numbers
  const number = parseInt(document.getElementById("your-number").value)
  const sum = (number / 2) * (number + 1)
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + sum
}