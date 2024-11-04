export type Officer = {
    id: number;
    img: string;
    name: string;
    position: string;
    descrip: string;
};

export type Competition = {
    img: string;
    name: string;
    descrip: string;
    members: string;
};

export type User = {
    id: number;
    name:string;
    email:string;
    username:string;
    password:string;
    administrator: boolean;
};

export type Point = {
    id: number;
    name: string;
    points: number;
    email: string;
}