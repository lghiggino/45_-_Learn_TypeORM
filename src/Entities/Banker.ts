import {
    Entity,
    Column
} from "typeorm";

import { Person } from "./Utils/Person";

@Entity("banker")
export class Banker extends Person {
    @Column({unique:true, length: 10})
    employeeNumber: string

    @Column()
    institutionName: string

    
}
