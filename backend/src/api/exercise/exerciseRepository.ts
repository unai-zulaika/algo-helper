import PDBGlobal from "../../PDBGlobal";

export const exerciseRepository = {
  findByIdsAsync: async (ids: number[]): Promise<any | null> => {
    const db = PDBGlobal.getInstance().getDbConnection();

    const query = `
      SELECT * FROM EXERCISE WHERE id IN (${ids});
    `;
    try {
      const exercise = await db.any(query, [ids]);
      return exercise;
    } catch (error) {
      console.error("Error querying exercise:", error);
      throw error;
    }
  },
};
