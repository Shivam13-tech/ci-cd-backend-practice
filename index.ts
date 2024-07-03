import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Sample function to be tested
function add(a: number, b: number): number {
  return a + b;
}
console.log("test");

// Start the server only if not required by a test file
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export { app, add };
