import { getImagePromise } from "../bases/11-async-await";

describe("pruebas para 11-async-await.js", () => {
  test("debe retornar el url de una imagen", async () => {
    const url = await getImagePromise();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
