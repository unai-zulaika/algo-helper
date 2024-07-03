import PDBGlobal from "../../PDBGlobal";

export const userExerciseRepository = {
  findByUserIdAsync: async (id: number): Promise<any | null> => {
    const db = PDBGlobal.getInstance().getDbConnection();

    const query = `
      SELECT * FROM USER_EXERCISE WHERE user_id = ${id};
    `;
    try {
      const userExercise = await db.any(query, [id]);
      return userExercise;
    } catch (error) {
      console.error("Error querying user:", error);
      throw error;
    }
  },
};
