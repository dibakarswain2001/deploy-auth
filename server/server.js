import { app } from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
});
