export default class ParserException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ParserException";
    }
}