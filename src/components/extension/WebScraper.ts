import {Scholarship} from "../../Scholarship"
import ParserException from "./ParserException"

export function parseText(fullText: any) {
    let scholarships = fullText.split("\n");
    let scholarshipList: any = [];
    for (const point of scholarships) {
        if (point[0] == '*') {
            let currentScholarship = point.split('&&');
            let scholarship : Scholarship = {
                name: currentScholarship[0],
                href: currentScholarship[1],
                description: currentScholarship[2]
            }
            try {
                let cleanScholarship = cleanText(scholarship);
                scholarshipList.push(cleanScholarship);
            } catch (error: any) {
                return [];
            }
        }
    }
    return scholarshipList;
}

export function cleanText(thisScholarship: any) {
    thisScholarship.name = thisScholarship.name.substring(2);
    let link = "";
    if (thisScholarship.href === undefined) {
        throw ParserException;
    }
    let https = startsWithHTTPS(thisScholarship.href);
    if (https == "") {
        throw ParserException;
    }
    for (let i=0; i < https.length; i++) {
        if (thisScholarship.href[i] == ']' || thisScholarship.href[i] == ')') {
            break;
        } else if (!(thisScholarship.href[i] == '[' || thisScholarship.href[i] == '(' || thisScholarship.href[i] == ' ')) {
            link += thisScholarship.href[i];
        }
    }
    thisScholarship.href = link;
    return thisScholarship
}

export function startsWithHTTPS(thisHref: string) {
    const startIndex = thisHref.indexOf("https");
    if (startIndex === -1) {
        return "";
    }
    console.log(thisHref.substring(startIndex));
    return thisHref.substring(startIndex);
}