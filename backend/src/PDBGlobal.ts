import pgPromise from "pg-promise";

class PDBGlobal {
  private static _instance: PDBGlobal;
  private static dbConnection: any;

  private constructor() {
    if (!PDBGlobal.dbConnection) {
      const pgp = pgPromise({
        // Initialization Options
      });
      PDBGlobal.dbConnection = pgp(
        "postgres://myuser:mypassword@localhost:5432/algohelper"
      );
    }
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new PDBGlobal();
    }
    return this._instance;
  }

  getDbConnection() {
    return PDBGlobal.dbConnection;
  }
}

export default PDBGlobal;
