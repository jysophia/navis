import { Entity } from "remult";

@Entity("scholarships", {
    allowApiCrud: true,
})
export class Scholarship {
    name = "";
    href = "";
    description = "";
    saved = false;
}