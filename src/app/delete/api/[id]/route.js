import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const { id } = await params;
  const createCollection = db.collection("create");
  try {
    const resp = await createCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return Response.json({ message: "deleted the booking", response: resp });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" });
  }
};





// delete all code

// import { connectDB } from "@/lib/connectDB";

// export const DELETE = async (request) => {
//   const db = await connectDB();
//   const createCollection = db.collection("create");
//   try {
//     const resp = await createCollection.deleteMany();
//     return Response.json({ message: "deleted the booking", response: resp });
//   } catch (error) {
//     return Response.json({ message: "Something Went Wrong" });
//   }
// };






