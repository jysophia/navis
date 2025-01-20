import Server from '../../src/server/Server.ts';
import { expect } from 'chai';
import request from 'supertest';
import * as fs from 'fs';

describe("Server test", function () {
    let server: Server;
    const endpointUrl = "/api/scholarships";

    before(function () {
        server = new Server();
        server.start(3002);
    });

    describe("Add scholarship", function () {
        it("POST test for a single scholarship", async function () {
            const scholarship = fs.readFileSync("../../test/resources/singleScholarship.json");
            let res: any = {}
            try {
                res = await request(server.app)
                    .post(endpointUrl)
                    .send(scholarship)
                expect(res.status).to.be.equal(200);
            } catch (error: any) {
                console.log(error);
				console.log(res.body);
				expect.fail();
            }
        });

        it("POST test for multiple scholarships", async function () {
            const scholarship = fs.readFileSync("../../test/resources/multipleScholarships.json");
            let res: any = {}
            try {
                res = await request(server.app)
                    .post(endpointUrl)
                    .send(scholarship)
                expect(res.status).to.equal(200);
            } catch (error: any) {
                console.log(error);
				console.log(res.body);
				expect.fail();
            }
        });
    });
    
    describe("GET Scholarship", function () {
        it ("GET test for all scholarships", async function () {
            const scholarship = fs.readFileSync("../../test/resources/getAllScholarships.json");
            let res: any = {}
            try {
                res = await request(server.app)
                    .get(endpointUrl)
                    .send(scholarship)
                expect(res.status).to.equal(200);
            } catch (error: any) {
                console.log(error);
				console.log(res.body);
				expect.fail();
            }
        });

        it ("GET test for all scholarships, one marked as unsaved should not appear", async function () {
            const scholarship = fs.readFileSync("../../test/resources/getAllScholarshipsExceptUnsaved.json");
            let res: any = {}
            try {
                res = await request(server.app)
                    .get(endpointUrl)
                    .send(scholarship)
                expect(res.body).to.equal(
                    [
                        {
                            "name": "Scholarship 1",
                            "href": "https://www.fake_url.com",
                            "description": "This is a scholarship",
                            "saved": true
                        },
                        {
                            "name": "Scholarship 2",
                            "href": "https://www.fake_url2.com",
                            "description": "This is a scholarship 2",
                            "saved": true
                        },
                        {
                            "name": "Scholarship 3",
                            "href": "https://www.fake_url3.com",
                            "description": "This is a scholarship 3",
                            "saved": true
                        }
                    ]
                );
            } catch (error: any) {
                console.log(error);
				console.log(res.body);
				expect.fail();
            }
        });
    });

    describe("DELETE Scholarship", function () {
        it ("DELETE test for a single scholarship", async function () {
            const scholarship = fs.readFileSync("../../test/resources/deleteOneScholarship.json");
            let res: any = {}
            try {
                res = await request(server.app)
                    .delete(endpointUrl)
                    .send(scholarship)
                expect(res.body).to.equal(
                    [
                        {
                            "name": "Scholarship 2",
                            "href": "https://www.fake_url2.com",
                            "description": "This is a scholarship 2",
                            "saved": true
                        },
                        {
                            "name": "Scholarship 3",
                            "href": "https://www.fake_url3.com",
                            "description": "This is a scholarship 3",
                            "saved": true
                        },
                        {
                            "name": "Scholarship 4",
                            "href": "https://www.fake_url4.com",
                            "description": "This is a scholarship 4",
                            "saved": true
                        }
                    ]
                );
            } catch (error: any) {
                console.log(error);
				console.log(res.body);
				expect.fail();
            }
        });

        it ("DELETE test for all scholarships", async function () {
            const scholarship = fs.readFileSync("../../test/resources/deleteMultipleScholarships.json");
            let res: any = {}
            try {
                res = await request(server.app)
                    .delete(endpointUrl)
                    .send(scholarship)
                expect(res.body).to.equal(
                    []
                );
            } catch (error: any) {
                console.log(error);
				console.log(res.body);
				expect.fail();
            }
        });
            
    })
    
})