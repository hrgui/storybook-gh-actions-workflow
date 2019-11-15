import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";




const getMatchOptions = ({ context: { kind, story }, url }) => {
  console.log("Executing match:", kind, story);
  if (story === "Icons" || story === "Buttons" || story === "Textareas") {
    return {
      failureThreshold: 0.01,
      failureThresholdType: "percent"
    };
  }

  return {};
};

initStoryshots({
  /* configuration options */
  test: imageSnapshot({
    storybookUrl: "http://localhost:9009",
    getMatchOptions
  })
});