export class DomainException extends Error{

    constructor(public message: string, public name: string){
        super(message)
    }

}