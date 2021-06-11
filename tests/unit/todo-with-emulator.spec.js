import * as firebase from "@firebase/testing";
import fs from "fs";

const projectName = "vue-firebase-todo-example";
const rules = fs.readFileSync("firestore.rules", "utf8");
const coverageUrl = `http://localhost:8080/emulator/v1/projects/${projectName}:ruleCoverage.html`;

function authedApp(auth) {
  return firebase
    .initializeTestApp({ projectId: projectName, auth })
    .firestore();
}

beforeEach(async () => {
  // Clear the database between tests
  await firebase.clearFirestoreData({
    projectId: projectName
  });
});

beforeAll(async () => {
  await firebase.loadFirestoreRules({
    projectId: projectName,
    rules: rules
  });
});

afterAll(async () => {
  await Promise.all(firebase.apps().map(app => app.delete()));
  console.log(`View rule coverage information at ${coverageUrl}\n`);
});

describe("Todo App", () => {
  it("require users to log in before creating a profile", async () => {
    const db = authedApp(null);
    await firebase.assertSucceeds(
      db.collection("todo").add({ todo: "hoge", description: "jgoejoge" })
    );
  });
});
