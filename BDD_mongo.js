//BASE DE DATOS EN MONGO CLOUD

/* 1 */
{
    "_id": ObjectId("5e778c9ea034459bb1007dc5"),
    "dni": 1111111111,
    "apellidos": "SSSSSS AAAAAAA",
    "nombres": "AAAAAAAAA DDDDDDD",
    "direccion": "AAAAAAAAA",
    "telefono": NumberLong(99999999999),
    "correo": "qwertyqwertyqwerty",
    "edad": 11,
    "nroHorasDedicacionSemanal": 1111,
    "titulo": "ASDFGHJKL",
    "nivel_educacion": "AAAAAAAA",
    "carrera": "aaaaaaaaa",
    "linea_investigacion": "QQQQQQQQQQQ",
    "orcid": "AAAAAAAAA"
}


/* 2 */
{
    "_id": ObjectId("5e7790a0a034459bb1007e1c"),
    "id_grupos": 1111111,
    "nombre": "AAAAAAAA AAAAA AAA",
    "fecha_creacion": "2020-01-01",
    "integrantes": [{
        "dni": 1111111111,
        "apellidos": "QQQQQQQQQ AAAAAAAA",
        "nombres": "AAAAAAAAAA AAAAA"
    }],
    "lineas_investigacion": "AAAAAAAA",
    "proyectos_investigacion_generados": "AAAAA AAAA AAAA"
}


/* 3 */
{
    "_id": ObjectId("5e779c6ba034459bb1007f4b"),
    "id_proyectos": 111111111,
    "personal_involucrado": [{
        "dni": 111111111,
        "apellidos": "AAAAA AAAAA",
        "nombres": "AAAA DDDDD"
    }],
    "grupo_investigacion": [{
        "nombre": "QAQAQAQA"
    }],
    "fecha_inicio": "01-01-2020",
    "linea_investigacion": "AAAAAAAAAA",
    "introduccion": "AAAAAAAAAAAAAAAAAAA",
    "justificacion": "AAAAAAAAAAAAAAAAAAAA",
    "objetivos": "AAAAAA AAAAAAA",
    "materiales": "AAAAAAAAAAAA",
    "resultados_esperados": "AAAAAAAAAAAAAAAA",
    "presupuesto": 0.0,
    "cronograma": "",
    "articulos_generados": "aaaaaaaaa",
    "estado_proyecto": "qqqqqqqqqqqqqqq"
}


/* 4 */
{
    "_id": ObjectId("5e77d9a9a034459bb1008da7"),
    "id_seguimientos": 1111111,
    "nombre": "aaaaaaaaa",
    "mes": "2020-01-01",
    "calificacion": "00.00",
    "resultados_alcanzados": "AAAAAA",
    "observaciones": "QQQQQQAAAAAA",
    "novedades": "QAAAQQAAAQAAA"
}


/* 5 */
{
    "_id": ObjectId("5e77de0fa034459bb1008e0d"),
    "id_articulos": 111111111,
    "personas": [{
        "dni": 1111111111,
        "apellidos": "AAAAA AAAAAAA",
        "nombres": "QQQQQQQ AAAAA"
    }],
    "titulo": "AAAAAAAAAAAA",
    "palabras_clave": "AAAAA DDDDDD",
    "anio": 2020,
    "link_articulo": "QQQQQQQQQQQQQQQQQQ",
    "revista_congreso": "AAAAAAAA QQQQQ",
    "quartile": 1111111,
    "issn": "QQQQQQQQ",
    "sjr": 0.0,
    "isbn": "AAAAAAAAAAA",
    "indice": "AAAAAAAAAAAAAA",
    "tipo_documento": "AAAAAAAAA",
    "fecha_aceptacion": "2020-01-01",
    "fecha_publicacion": "2020-01-01",
    "doi": "AAAAAA",
    "idioma": "AAAAAAAA",
    "pais": "AAAAAAA"
}



/* 6 */
{
    "_id": ObjectId("5e77dfc2a034459bb1008e39"),
    "id_libros": 1111111,
    "personas": [{
        "dni": 111111111,
        "apellidos": "AAAA AAAAAAAAA",
        "nombres": "AAAAAAAAAAAA AAAAA"
    }],
    "titulo": "AAAAAAAAAAAA",
    "editorial": "AAAAAAAAAAA AAAAAAA",
    "tipo_libro": "AAAAAAA AAAA A AAAA",
    "numero_paginas": 1111,
    "area_publicacion": "AAAAA AAAAAAA",
    "isbn": "AAAAAAAAA",
    "fecha_publicacion": "2020-01-01"
}



/* 7 */
{
    "_id": ObjectId("5e77e049a034459bb1008e49"),
    "id_convenio": 11111111,
    "nro": 111111,
    "institucion": "AAAAAAAAAAAA AA AAAAA",
    "fecha_firma": "2020-01-01",
    "beneficios": "aaaaaaa aaaaaaaaaa",
    "obligaciones": "AAAAAAAA AAAAA"
}


/* 8 */
{
    "_id": ObjectId("5e77e11ea034459bb1008eb3"),
    "id_capacitaciones": 1111111,
    "nombre": "AAAAAAAAA AAAAAA",
    "instructor": [{
        "dni": 1111111111,
        "apellidos": "QQQQQQQQ",
        "nombres": "AAAAAAA",
        "telefono": 0
    }],
    "horas": "00:00",
    "tipo_cpacitacion": "AAAAAAAAAAAA",
    "fecha_inicio": "00-00-0000",
    "fecha_fin": "00-00-0000"
}