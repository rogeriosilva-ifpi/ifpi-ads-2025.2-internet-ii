import { DomainException } from "./DomainException";

export class EntityNotFoundException extends DomainException{

    constructor(public message: string){
        super(message, 'EntityNotFoundException')
    }

}