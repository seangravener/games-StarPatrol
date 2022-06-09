import { GameObjects, Scene } from "phaser"

type Text = GameObjects.Text
type Graphics = GameObjects.Graphics

type updateBarParams = {
  scene?: Scene
  progressBox?: Graphics
  progressBar?: Graphics
  percentText?: Text
  loadingText?: Text
}
type updateBar = (params: updateBarParams) => (value: number) => void
const updateProgressBar: updateBar = ({ progressBar, percentText }) => {
  return (value: number) => {
    progressBar.clear()
    progressBar.fillStyle(0xffffff, 1)
    progressBar.fillRect(250, 280, 300 * value, 30)
    percentText.setText(value * 100 + "%")
  }
}

const makeProgressBar = (scene: Scene) => {
  const { width, height } = scene.cameras.main
  const progressBar = scene.add.graphics()
  const progressBox = scene.add.graphics()

  progressBox.fillStyle(0x222222, 0.8)
  progressBox.fillRect(240, 270, 320, 50)

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

  return { scene, progressBox, progressBar, loadingText, percentText }
}

export { updateProgressBar, makeProgressBar }
