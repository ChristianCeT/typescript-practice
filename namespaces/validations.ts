//que se tenga agrupado todo lo que se tiene que funcione, parecido a una clase para ejecutar algo
//agrupador global
//no se usa mucho en el desarrollo
namespace Validation {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (fecha: Date): boolean => {
    return isNaN(fecha.valueOf()) ? false : true;
  };
}

console.log(Validation.validateText("hola"));
