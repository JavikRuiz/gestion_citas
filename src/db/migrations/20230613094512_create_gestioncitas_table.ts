import { Knex } from 'knex'

export async function up(knex:Knex): Promise<void> {
    await knex.raw(
        `
        CREATE OR REPLACE FUNCTION trigger_set_timestamp()
        RETURNS TRIGGER AS $$
        BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;

        CREATE TABLE IF NOT EXISTS doctores (
            id_doctor bigserial,
            nombre VARCHAR,
            apellido VARCHAR,
            especialidad VARCHAR,
            consultorio VARCHAR,
            correo VARCHAR,
            created_at timestamptz NOT NULL DEFAULT NOW(),
            updated_at timestamptz NOT NULL DEFAULT NOW(),
            PRIMARY key(id_doctor)
        );

        CREATE TRIGGER set_timestamp
        BEFORE UPDATE ON doctores
        FOR EACH ROW
        EXECUTE PROCEDURE trigger_set_timestamp();

        CREATE TABLE IF NOT EXISTS pacientes (
            id_paciente bigserial,
            nombre VARCHAR,
            apellido VARCHAR,
            identificacion VARCHAR UNIQUE,
            telefono BIGINT,
            created_at timestamptz NOT NULL DEFAULT NOW(),
            updated_at timestamptz NOT NULL DEFAULT NOW(),
            PRIMARY key(id_paciente)
        );

        CREATE TRIGGER set_timestamp
        BEFORE UPDATE ON pacientes
        FOR EACH ROW
        EXECUTE PROCEDURE trigger_set_timestamp();

        CREATE TABLE IF NOT EXISTS citas (
            id_cita bigserial,
            horario VARCHAR,
            especialidad VARCHAR,
            id_doctor BIGINT,
            identificacion_paciente VARCHAR,
            created_at timestamptz NOT NULL DEFAULT NOW(),
            updated_at timestamptz NOT NULL DEFAULT NOW(),
            PRIMARY key(id_cita),
            CONSTRAINT fk_doctores
            FOREIGN KEY (id_doctor)
            REFERENCES doctores(id_doctor),
            CONSTRAINT fk_pacientes
            FOREIGN KEY (identificacion_paciente)
            REFERENCES pacientes(identificacion)
        );

        CREATE TRIGGER set_timestamp
        BEFORE UPDATE ON citas
        FOR EACH ROW
        EXECUTE PROCEDURE trigger_set_timestamp();
        `
    )
}

export async function down(knex: Knex): Promise<void> {
    await knex.raw(
        `
        DROP TABLE doctores;
        DROP TABLE pacientes;
        DROP TABLE citas;
        `
    )
}