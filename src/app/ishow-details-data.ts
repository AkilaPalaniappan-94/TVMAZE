export interface IShowDetailsData {
   show:{ name:string,
    status:string,
    language:string,
    runtime:number,
    premiered:string,
    network:{
        name:string
    },
    rating:{
        average:number
    },
    schedule:{
        time:string
    }
    image:{
        medium:string
    }

   }
   
}