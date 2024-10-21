

export function add(num :number , num2:number): number
{
    return num+num2;
}

export function multiplication(num:number,num2:number) :number{
    return num*num2;
}

export function division (num:number , num2:number) : number{
    if(num2==0)
    {
        throw new Error("division by zero ");
    }

    return num/num2;
}

export function substraction (num:number,  num2:number):number
{
    return num-num2;
}


