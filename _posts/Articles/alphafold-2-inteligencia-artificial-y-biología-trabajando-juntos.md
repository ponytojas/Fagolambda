---
layout: article
title: "AlphaFold 2: inteligencia artificial y biología trabajando juntos."
date: 2021-05-03T16:39:28.123Z
updatetime: ""
update: None
author: Lorena Jiménez
time-to-read: "20 "
thumbnail: /uploads/7036ee09-d792-451c-abfe-74dd517b5d85.webp
subtitle: Una vez más la biología ya la inteligencia artificial se dan la mano
  para revolucionar la biomedicina.
tags:
  - AlphaFold
  - Biología
  - Biomedicina
  - Inteligencia artificial
---
Una vez más, la **biología** y la **inteligencia artificial** se unen para producir algo único, para poder entender de que estamos hablando primero tenemos entender qué es una proteína: Una proteína es una estructura formada por aminoácidos y cumplen funciones muy diversas, como transportar el oxígeno a todo nuestro cuerpo, hacer que las reacciones sean más rápidas...

¿QUÉ ESTRUCTURA TIENEN LAS PROTEÍNAS?

Las proteínas tienen cuatro niveles estructurales: 

**Estructura primaria:** Se trata de una secuencia de aminoácidos , como si se tratase de un collar de perlas, es decir, las perlas serían los aminoácidos y la proteína sería el collar estirado.

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/54804E02-0FD4-4D39-84DA-4F92324FB746.jpeg)

Estructura primaria

**Estructura secundaría**: Se da cuando la estructura primaria se dobla y puede adquirir 2 formas: 

\-Lámina beta plegada: Se pliega como si fuese un zigzag

\-Hélice: Como indica su nombre se enrolla como un cable de teléfono

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/047D4936-8C7F-4896-9DD7-1FB4428F518D.gif)

Estructura secundaria

**Estructura terciaria**: La proteína que ya tiene estructura secundaria pliega sobre si misma, como si enrollamos ovillo de lana. Cuando las proteínas adquieren estas estructuras se vuelven funcionales

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/99CA2E21-44BC-4965-BBBC-8A1927E88ABD.jpeg)

Estructura terciaria

**Estructura cuaternaria:** Se produce cuando 2 o mas proteínas con estructura terciaria se unen entre ellas.

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/9758F361-D3D1-409B-9E3A-16644597F70C-1024x1024.jpeg)

¿POR QUÉ ES ESTO IMPORTANTE?

Cuando una proteína adquiere su **estructura terciaria** se vuelve, como hemos dicho, **funcional**. Entonces, si una proteína no se pliega correctamente la estructura terciaria que se forma va a ser errónea y va a perder su función, o peor, puede convertirse en un prión. Un **prión** es una proteína mal plegada que puede provocar enfermedades muy graves, como encefalopatías espongiformes y muchos más daños neurológicos.

Como ya podemos deducir, conocer cómo se pliegan las proteínas y qué estructura adquieren es muy importante, sobre todo en biomedicina, para poder conocer el funcionamiento o algunos factores que influyen en enfermedades como por ejemplo la diabetes tipo 2 o el Alzheimer.

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/212A96A1-3744-4ACF-9A75-59D520CB33AD.jpeg)

Hasta ahora, cuando queríamos saber qué forma tenía una proteína y cómo se plegaba había que hacer experimentos que eran muy difíciles y requerían mucho tiempo, como por ejemplo la cristalografía de rayos X, estamos hablando de muchos meses para saber, y no a ciencia cierta, cual es la estructura terciaria de alguna proteína. 

Muy bien, pues aquí es donde entra la **inteligencia artificia**l: Durante varios años se ha estado realizando una competición bienal en la que participan muchas empresas para poder resolver este problema, es decir, para poder saber cómo se pliega una proteína con mucha precisión y muy rápido.

![](https://media.giphy.com/media/gpXfKa9xLAR56/giphy.gif)

Cada dos años se celebra la competición **CASP**, en la que se propone a los participantes presentar modelos que solucionen el problema del plegamiento de proteínas. 

Este 2020 se ha celebrado CASP14, la edición en la que se presenta **AlphaFold 2**, una solución propuesta por **DeepMind**.

¿QUÉ ES DEEPMIND?

Se trata de una empresa que forma parte de **Alphabet**, empresa matriz de **Google**. DeepMind ha desarrollado también AlphaGo, AlphaZero y en el que nos vamos a centrar en este articulo: AlphaFold. 

Entonces, ¿Qué es AlphaFold? Se trata de un sistema de **redes neuronales** que es capaz de producir la estructura tridimensional (estructura terciaria y cuaternaria) de una proteína. Tiene un nivel de acierto del **92,4%**, una tasa mucho más elevada que el resto de competidores e incluso más alta que AlphaFold 1 (que se presentó la edición anterior).

![](https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif)

Lo más curioso de todo es cómo han logrado que esto sea posible: 

Cuando queremos conocer la estructura de una proteína el programa AlphaFold 2 analiza la secuencia de aminoácidos (la estructura primaria de la que hablábamos al principio) y la transforma en una matriz de fuerzas y a través de esa matriz llegan a generar el modelo de la proteína en 3D

Esta matriz tendrá como columnas y filas cada uno de los aminoácidos de la cadena.

Después, el interior de la matriz se rellena con las distancias existentes entre el aminoácido colocado en la fila con los de la columna. Se forma entonces una diagonal de distancia cero (ya que la distancia de un aminoácido a si mismo es cero), y una zona cercana a esta diagonal con distancias muy pequeñas, ya que son los aminoácidos que están unidos directamente.

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/D0988EA6-805C-4499-9C0E-C73A5BFE3C5E.jpeg)

Matriz de AlphaFold 2

Por último, las zonas donde se ha producido un plegamiento también aparecerán con una distancia “pequeña” creando zonas donde algunos aminoácidos estarán cerca de otros a los que no están unidos directamente.

Esta información es la entrada que se ofrecerá a la red neuronal convolucional de AlpaFold. En las redes convolucionales neuronales artificiales las “neuronas” corresponden a campos receptivos similares a las neuronas de la corteza visual primaria en un cerebro biológico y son ampliamente utilizadas en tareas de visión artificial.

La red neuronal utiliza **algoritmos de optimización** (algoritmos de gradiente descendiente) para intentar encontrar el ángulo de torsión que se presenta entre los diferentes aminoácidos, creando así la imagen tridimensional del plegado de la cadena.

Una vez tenemos la matriz y tenemos los ángulos que se van a dar durante el plegamiento de la proteína podemos obtener el modelo de la estructura terciaria. En la siguiente imagen comparamos los resultados obtenidos por AlphaFold 2 y los obtenidos con los métodos actuales:

![](https://fagolambda-436fc1.ingress-baronn.easywp.com/wp-content/uploads/2021/02/5224AE8D-A70D-4EBC-AE84-6FEC286C186B-1024x576.gif)

En definitiva, AlphaFold 2 ha supuesto una revolución en el año 2020, posiblemente haya solucionado uno de los problemas que lleva siendo durante mucho tiempo un quebradero de cabeza para los biólogos, experimentos que duran meses y son muy costosos pueden ser sustituidos por un programa de ordenador que realiza esta tarea con más de un 90% de fiabilidad. 

Una vez mas queda demostrado que integrar todas las ramas de conocimiento nos permite avanzar mejor y más rápido en la dirección correcta. 

Podéis visitar DeepMind y leer más sobre Alphafold aquí: <https://deepmind.com/blog/article/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology>