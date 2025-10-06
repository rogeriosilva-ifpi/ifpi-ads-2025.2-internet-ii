import { DomainException } from "./DomainException";

export class BusinessValidationException extends DomainException{

    constructor(public message: string){
        super(message, 'BusinessValidationException')
    }
}