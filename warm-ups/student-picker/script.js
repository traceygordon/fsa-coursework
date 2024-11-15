function render(selector) {
  const node = document.querySelector(selector);
  if (!node) return;

  const spin = node.querySelector("button");
  const wheel = node.querySelector("ul");
  const spinAudio = new Audio("./spinSound.mp3")
  const cheerAudio = new Audio("./cheer.mp3")
  let animation;
  let previousEndDegree = 0;

  spin.addEventListener("click", () => {
    if (animation) {
      animation.cancel(); // Reset the animation if it already exists
      spinAudio.pause();
      cheerAudio.pause();
    }

    const randomAdditionalDegrees = Math.random() * 360 + 1800;
    const newEndDegree = previousEndDegree + randomAdditionalDegrees;
    spinAudio.play();
    animation = wheel.animate(
      [
        { transform: `rotate(${previousEndDegree}deg)` },
        { transform: `rotate(${newEndDegree}deg)` },
      ],
      {
        duration: 4000,
        direction: "normal",
        easing: "cubic-bezier(0.440, -0.205, 0.000, 1.130)",
        fill: "forwards",
        iterations: 1,
      }
    );

    previousEndDegree = newEndDegree;

    // --------------------------------------------
    // append code for getting index of wheel spim
    // --------------------------------------------
    const rangeAngles = [
      { index: 0, from: 351, to: 360 },
      { index: 0, from: 0, to: 9 },
      { index: 1, from: 9, to: 27 },
      { index: 2, from: 27, to: 45 },
      { index: 3, from: 45, to: 63 },
      { index: 4, from: 63, to: 81 },
      { index: 5, from: 81, to: 99 },
      { index: 6, from: 99, to: 117 },
      { index: 7, from: 117, to: 135 },
      { index: 8, from: 135, to: 153 },
      { index: 9, from: 153, to: 171 },
      { index: 10, from: 171, to: 189 },
      { index: 11, from: 189, to: 207 },
      { index: 12, from: 207, to: 225 },
      { index: 13, from: 225, to: 243 },
      { index: 14, from: 243, to: 261 },
      { index: 15, from: 261, to: 279 },
      { index: 16, from: 279, to: 297 },
      { index: 17, from: 297, to: 315 },
      { index: 18, from: 315, to: 333 },
      { index: 19, from: 333, to: 351 },
    ];

    // position at zero level
    const calculateZeroAngle = (finalAngle) => {
      let zeroAngle = 360 - finalAngle + 90;
      zeroAngle = ((zeroAngle % 360) + 360) % 360;
      zeroAngle = Math.round(zeroAngle * 10) / 10;
      return zeroAngle;
    };

    // Save the final degree to determine the winning segment
    animation.onfinish = async () => {
      const finalAngle = ((newEndDegree % 360) + 360) % 360;
      const zeroAngle = calculateZeroAngle(finalAngle);
      const indexfOfWinner = rangeAngles.find(
        (a) => a.from < zeroAngle && a.to >= zeroAngle
      ).index;
      cheerAudio.play();
    };
  });
}

// Usage
render(".ui-wheel-of-fortune");
