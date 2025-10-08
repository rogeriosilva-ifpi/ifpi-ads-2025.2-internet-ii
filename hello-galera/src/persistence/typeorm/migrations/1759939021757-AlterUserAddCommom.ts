import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserAddCommom1759939021757 implements MigrationInterface {
    name = 'AlterUserAddCommom1759939021757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "commomCreatedat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "commomUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "commomDeletedat" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "commomVersion" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "commomVersion"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "commomDeletedat"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "commomUpdatedat"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "commomCreatedat"`);
    }

}
