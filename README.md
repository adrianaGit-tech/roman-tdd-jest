**Ejemplo práctico de Desarrollo Guiado por Pruebas (TDD) implementado en TypeScript + Jest.**

El proyecto convierte números romanos a arábigos siguiendo el ciclo Red → Green → Refactor.

Red → Green → Refactor 
Escribir una prueba que falle  
Implementar el mínimo código necesario para que pase  
Refactorizar manteniendo las pruebas en verde 

Es ideal para demostrar fundamentos de testing automatizado, uso de Jest y buenas prácticas de desarrollo orientado a pruebas.

**Tecnologías utilizadas:**
TypeScript
Jest
Node.js
TDD

**Funcionalidad Principal: convert_number(roman: string): string**

Ejecución del Proyecto
1. Instalación de dependencias**
npm install

2. Ejecución de pruebas
npm test


Las pruebas verifican distintos escenarios, incluyendo:

Casos básicos (I, II, III)

Casos con resta (IV, IX)

Combinaciones mayores (XX, MCMXC)

Manejo de errores (símbolos inválidos o cadena vacía)
