//db 연결
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() //entity 에 column 던져죠!
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;
  @Column({ type: "text" })
  title!: string;
  @Column({ type: "integer" })
  age!: number;
  @Column({ type: "timestamp", default: null, nullable: true })
  deleteAt?: Date;
}

//내가 class를 만들었는데 이걸 table로 바꿔줘!Entity,Column import
