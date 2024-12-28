import {Scholarship} from "../Scholarship"

export function parseText(fullText: any) {
    let scholarships = fullText.split("\n");
    let scholarshipList: any = [];
    for (const point of scholarships) {
        if (point[0] == '*') {
            let currentScholarship = point.split(';');
            let scholarship : Scholarship = {
                name: currentScholarship[0],
                href: currentScholarship[1],
                description: currentScholarship[2]
            }
            cleanText(scholarship);
            scholarshipList.push(scholarship);
            }
      }
      return scholarshipList;
    }

export function cleanText(thisScholarship: any) {
    thisScholarship.name = thisScholarship.name.substring(2)
    const regex = /https?:\/\/[^\s]+/;
    const match = thisScholarship.href.match(regex);
    if (match) {
        thisScholarship.href = match[0].replace(/[\]\)]$/, '');
    }
    return thisScholarship
}
