import client from "./client";

const getCurrentMedicines = () => client.get("/current-medicines");
const getAllMedicines = () => client.get("/medicines");

export default { getCurrentMedicines, getAllMedicines };
