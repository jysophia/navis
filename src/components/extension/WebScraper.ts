import {Scholarship} from "../../Scholarship"

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
            scholarshipList.push(cleanText(scholarship));
        }
    }
    return scholarshipList;
}

export function cleanText(thisScholarship: any) {
    thisScholarship.name = thisScholarship.name.substring(2)
    let link = ""
    let createUrl = false
    console.log(thisScholarship);
    for (let i=0; i < thisScholarship.href.length; i++) {
        // console.log(thisScholarship.href.substring(i));
        if (!createUrl) {
            createUrl = startsWithHTTPS(thisScholarship.href.substring(i));
        }
        if (createUrl) {
            if (thisScholarship.href[i] == ']' || thisScholarship.href[i] == ')') {
                break;
            } else if (!(thisScholarship.href[i] == '[' || thisScholarship.href[i] == '(' || thisScholarship.href[i] == ' ')) {
                link += thisScholarship.href[i];
            }
        }
    }
    thisScholarship.href = link;
    return thisScholarship
}

export function startsWithHTTPS(thisHref: string) {
    let prefix = "";
    for (let i = 0; i < 5; i++) {
        prefix += thisHref[i];
    }
    return prefix == "https";
}