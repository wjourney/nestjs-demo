import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users') // 对应数据库中的 users 表
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100, unique: true })  // 需要是独一无二的
  email: string;

  @Column({ length: 50 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ select: false }) // 查询时不返回密码
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
