import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://danylosushko18:H1YGXBOijDRSau9E@cluster0.8i6ihpf.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Connection Failed" });
      return;
    }

    try {
      const db = client.db();
      await db.collection("foodBlog").insertOne(req.body.blog);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting Data Failed" });
      client.close();
      return;
    }

    res.status(201).json({ message: "Everything is Awesome" });
  }
}

export default handler;
