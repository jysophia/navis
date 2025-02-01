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
                description: currentScholarship[2],
                saved: false
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
    return thisHref.substring(startIndex);
}

export async function writeToDB(scholarshipList: any) {
    console.log('Writing to db...');
    const port = process.env.PORT || 3000;
    const url = `http://localhost:${port}/api/scholarships`;
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scholarshipList)
        });
    } catch (error: any) {
        console.error('Error writing to db');
        return;
    }
    console.log('Successfully wrote to db');
}

export async function deleteFromDB(scholarshipList: any) {
    console.log('Deleting items from db...');
    const port = 3000;
    for (const scholarship of scholarshipList) {
        const id = scholarship.id as string;
        const url = `http://localhost:${port}/api/scholarships/${id}`;
        try {
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        } catch (error : any) {
            console.error('Error deleting items from db: ', error);
            return;
        }
    }
    
    console.log('Successfully removed items from db');
}