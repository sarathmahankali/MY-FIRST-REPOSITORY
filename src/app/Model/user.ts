export class User {
    Id!: number;
    Name!: string;
    Username!: string;
    Password!: string;
    UserType!: string;
  }
  //bala
  export class recommendation {
    Id: number;
  
    Name: string;
  
    RecommendationId!: number;
  
    constructor(id: number, dName: string) {
      this.Id = id;
      this.Name = dName;
    }
  }
  