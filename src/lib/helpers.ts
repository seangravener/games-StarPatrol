import { Scene } from "phaser"

export function makeProgressBar(scene: Scene) {
  const { width, height } = scene.cameras.main

  const progressBar = scene.add.graphics()
    const progressBox = scene.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(240, 270, 320, 50)


  const loadingText = scene.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: "Loading...",
    style: {
      font: "20px monospace",
      color: "#ffffff",
    },
  })
  loadingText.setOrigin(0.5, 0.5)

  var percentText = scene.make.text({
    x: width / 2,
    y: height / 2 - 5,
    text: "0%",
    style: {
      font: "18px monospace",
      // fill: '#ffffff'
    },
  })
  percentText.setOrigin(0.5, 0.5)

  return { progressBar, loadingText, percentText }
}
