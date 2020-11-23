window.addEventListener("keydown", function (e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
    const key = document.querySelector(
      `.drum-keys[data-keys="${e.keyCode}"]`
    );
    // console.log(keys);
    key.classList.add("playing"); //add playing class to them which is styled in css

    if (!audio) return;
    //stops the function when any other key is pressed
    audio.currentTime = 0;
    audio.play();
  });

  function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== "transform") return; //skips if its not a transform
    // console.log(e); //shows number of transitions happening everytime a button is pressed

    // console.log(e.propertyName); /shows property name

    // console.log(this); shows current key

    this.classList.remove("playing"); //removes classList Playing
  }
  const keys = document.querySelectorAll(".drum-keys");
  // console.log(keys);

  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );