import { User } from "@/api/user/userModel";

import PDBGlobal from "../../PDBGlobal";

export const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 42,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 21,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const userRepository = {
  findByIdAsync: async (id: number): Promise<any | null> => {
    const db = PDBGlobal.getInstance().getDbConnection();

    const query = `
      SELECT * FROM ALGOUSER WHERE id = ${id};
    `;

    try {
      const user = await db.any(query, [id]);
      return user;
    } catch (error) {
      console.error("Error querying user:", error);
      throw error;
    }
    //return users.find((user) => user.id === id) || null;
  },
};
