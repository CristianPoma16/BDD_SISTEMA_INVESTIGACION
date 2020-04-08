//BASE DE DATOS EN POOSTGRES SQL
--Database: sistema_investigacion

--DROP DATABASE sistema_investigacion;

CREATE DATABASE sistema_investigacion
WITH
OWNER = postgres
ENCODING = 'UTF8'
LC_COLLATE = 'Spanish_Spain.1252'
LC_CTYPE = 'Spanish_Spain.1252'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

--Table: public.articulos

--DROP TABLE public.articulos;

CREATE TABLE public.articulos(
    id_articulos integer NOT NULL DEFAULT nextval('articulos_id_articulos_seq'::regclass),
    titulo text COLLATE pg_catalog.
    "default"
    NOT NULL,
    palabras_clave text COLLATE pg_catalog.
    "default"
    NOT NULL,
    anio integer NOT NULL,
    link_articulo text COLLATE pg_catalog.
    "default"
    NOT NULL,
    revista text COLLATE pg_catalog.
    "default"
    NOT NULL,
    quartile integer NOT NULL,
    issn text COLLATE pg_catalog.
    "default"
    NOT NULL,
    sjr double precision NOT NULL,
    isbn text COLLATE pg_catalog.
    "default"
    NOT NULL,
    indice text COLLATE pg_catalog.
    "default"
    NOT NULL,
    tipo_documento text COLLATE pg_catalog.
    "default"
    NOT NULL,
    fecha_aceptacion date NOT NULL,
    fecha_publicacion date NOT NULL,
    doi text COLLATE pg_catalog.
    "default"
    NOT NULL,
    idioma text COLLATE pg_catalog.
    "default"
    NOT NULL,
    pais text COLLATE pg_catalog.
    "default"
    NOT NULL,
    personas integer NOT NULL,
    CONSTRAINT articulos_pkey PRIMARY KEY(id_articulos),
    CONSTRAINT "ID_PERSONAS"
    FOREIGN KEY(id_articulos) REFERENCES public.personas(dni) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.articulos
OWNER to postgres;

--Table: public.capacitaciones

--DROP TABLE public.capacitaciones;

CREATE TABLE public.capacitaciones(
    id_capacitacion integer NOT NULL,
    nombre name NOT NULL,
    horas time with time zone[] NOT NULL,
    institucion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_fin date NOT NULL,
    tipo_capacitacion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    CONSTRAINT capacitaciones_pkey PRIMARY KEY(id_capacitacion)
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.capacitaciones
OWNER to postgres;

--Table: public.control_capacitaciones

--DROP TABLE public.control_capacitaciones;

CREATE TABLE public.control_capacitaciones(
    id_control_capacitacion integer NOT NULL,
    capacitacion integer NOT NULL,
    persona integer NOT NULL,
    CONSTRAINT "ID_CAPACITACION"
    FOREIGN KEY(capacitacion) REFERENCES public.capacitaciones(id_capacitacion) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT "ID_PERSONA"
    FOREIGN KEY(persona) REFERENCES public.personas(dni) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.control_capacitaciones
OWNER to postgres;

--Table: public.convenios_investigacion

--DROP TABLE public.convenios_investigacion;

CREATE TABLE public.convenios_investigacion(
    id_convenios_investigacion integer NOT NULL,
    numero_convenio integer NOT NULL,
    institucion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    fecha_firma date NOT NULL,
    beneficios text COLLATE pg_catalog.
    "default"
    NOT NULL,
    obligaciones text COLLATE pg_catalog.
    "default",
    CONSTRAINT convenios_investigacion_pkey PRIMARY KEY(id_convenios_investigacion)
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.convenios_investigacion
OWNER to postgres;

--Table: public.grupo_investigacion

--DROP TABLE public.grupo_investigacion;

CREATE TABLE public.grupo_investigacion(
    id_grupo_investigacion integer NOT NULL,
    nombre_grupo name NOT NULL,
    lineas_investigacion name NOT NULL,
    proyectos_investigacion_generados name NOT NULL,
    integrantes integer NOT NULL,
    CONSTRAINT grupo_investigacion_pkey PRIMARY KEY(id_grupo_investigacion),
    CONSTRAINT "ID_INTEGRANTES"
    FOREIGN KEY(integrantes) REFERENCES public.personas(dni) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.grupo_investigacion
OWNER to postgres;

--Table: public.
"libros/guias"

--DROP TABLE public.
"libros/guias";

CREATE TABLE public.
"libros/guias"
(
    id_libros integer NOT NULL,
    titulo text COLLATE pg_catalog.
    "default"
    NOT NULL,
    editorial text COLLATE pg_catalog.
    "default"
    NOT NULL,
    tipo_libro text COLLATE pg_catalog.
    "default"
    NOT NULL,
    numero_paginas integer NOT NULL,
    area_publicacion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    isbn text COLLATE pg_catalog.
    "default"
    NOT NULL,
    fecha_publicaciom date NOT NULL,
    personas integer NOT NULL,
    CONSTRAINT "libros/guias_pkey"
    PRIMARY KEY(id_libros),
    CONSTRAINT "ID_PERSONAS"
    FOREIGN KEY(personas) REFERENCES public.personas(dni) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.
"libros/guias"
OWNER to postgres;

--Table: public.personas

--DROP TABLE public.personas;

CREATE TABLE public.personas(
    dni integer NOT NULL,
    apellidos name NOT NULL,
    "nombres "
    name NOT NULL,
    direccion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    telefono integer NOT NULL,
    correo text COLLATE pg_catalog.
    "default"
    NOT NULL,
    edad integer NOT NULL,
    genero text COLLATE pg_catalog.
    "default"
    NOT NULL,
    institucion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    "nroHorasDedicacionSemanal"
    integer NOT NULL,
    titulo text COLLATE pg_catalog.
    "default"
    NOT NULL,
    nivel_educacion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    carrera text COLLATE pg_catalog.
    "default"
    NOT NULL,
    linea_investigacion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    orcid text COLLATE pg_catalog.
    "default"
    NOT NULL,
    CONSTRAINT personas_pkey PRIMARY KEY(dni),
    CONSTRAINT integrantes FOREIGN KEY(dni) REFERENCES public.grupo_investigacion(id_grupo_investigacion) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.personas
OWNER to postgres;

--Table: public.proyectos_investigacion

--DROP TABLE public.proyectos_investigacion;

CREATE TABLE public.proyectos_investigacion(
    id_proyectos_investigacion integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date NOT NULL,
    linea_investigacion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    introduccion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    justificacion text COLLATE pg_catalog.
    "default"
    NOT NULL,
    objetivos text COLLATE pg_catalog.
    "default"
    NOT NULL,
    materiales text COLLATE pg_catalog.
    "default"
    NOT NULL,
    resultados_esperados text COLLATE pg_catalog.
    "default"
    NOT NULL,
    presupuesto double precision NOT NULL,
    cronograma text COLLATE pg_catalog.
    "default"
    NOT NULL,
    articulos_generados text COLLATE pg_catalog.
    "default"
    NOT NULL,
    estado_proyecto text COLLATE pg_catalog.
    "default"
    NOT NULL,
    personal_involucrado integer NOT NULL,
    grupo_investigacion integer,
    CONSTRAINT proyectos_investigacion_pkey PRIMARY KEY(id_proyectos_investigacion),
    CONSTRAINT "ID_GRUPO_INVESTIGACION"
    FOREIGN KEY(grupo_investigacion) REFERENCES public.grupo_investigacion(id_grupo_investigacion) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT "ID_PERSONAL_INVOLUCRADO"
    FOREIGN KEY(personal_involucrado) REFERENCES public.personas(dni) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.proyectos_investigacion
OWNER to postgres;

--Table: public.seguimiento_proyectos

--DROP TABLE public.seguimiento_proyectos;

CREATE TABLE public.seguimiento_proyectos(
    id_seguimiento_proyectos integer NOT NULL,
    nombre_proyecto text COLLATE pg_catalog.
    "default"
    NOT NULL,
    mes integer NOT NULL,
    calificacion double precision NOT NULL,
    resultados_alcanzados text COLLATE pg_catalog.
    "default"
    NOT NULL,
    observaciones text COLLATE pg_catalog.
    "default"
    NOT NULL,
    novedades text COLLATE pg_catalog.
    "default"
    NOT NULL,
    CONSTRAINT seguimiento_proyectos_pkey PRIMARY KEY(id_seguimiento_proyectos)
)
WITH(
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.seguimiento_proyectos
OWNER to postgres;