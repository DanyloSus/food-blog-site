import { MongoClient } from "mongodb";

export async function getDataFromSQL() {
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

    const documents = await db
      .collection("foodBlog")
      .find()
      .sort({ _id: -1 })
      .toArray();
    client.close();
    return documents;
  } catch (error) {
    res.status(500).json({ message: "Gerting Data Failed" });
    client.close();
    return;
  }
}

async function handler(req, res) {
  res.status(200).json({ comments: "Everything is awesome" });
}

export default handler;
