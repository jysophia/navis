import { remultExpress } from "remult/remult-express";
import { Scholarship } from "../Scholarship";

export const api = remultExpress({
    entities: [Scholarship],
});