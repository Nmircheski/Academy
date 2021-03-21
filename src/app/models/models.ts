export interface ICourse {
    id: number;
    title: string;
    image: string;
    mentor: IMentor;
    description: string;
    duration: number;
    level: string;
    rating: string;
    date: Date;
    participants: IParticipant[];
}

export interface IMentor extends IPerson {
    bio: string;
    company: string;
}

export interface IParticipant extends IPerson {

}

export interface IPerson {
    id: number;
    name: string;
    surname: string;
    email: string;
}
