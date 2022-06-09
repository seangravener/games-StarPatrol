import { Scene } from "phaser"

const makeProgressBar = (scene: Scene) => {
  const { width, height } = scene.cameras.main,
    bar = scene.add.graphics(),
    box = scene.add.graphics()

  box.fillStyle(0x222222, 0.8)
  box.fillRect(240, 270, 320, 50)

  const loadingText = scene.make.text({
    text: "Loading...",
    x: width / 2,
    y: height / 2 - 50,
    style: {
      font: "20px monospace",
      color: "#ffffff",
    },
  })
  loadingText.setOrigin(0.5, 0.5)

  const text = scene.make.text({
    x: width / 2,
    y: height / 2 - 5,
    text: "0%",
    style: {
      font: "18px monospace",
      // fill: '#ffffff'
    },
  })
  text.setOrigin(0.5, 0.5)

  return { scene, box, bar, loadingText, text }
}

export { makeProgressBar }
