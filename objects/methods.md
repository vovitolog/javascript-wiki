### Object.prototype.hasOwnProperty() [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

### Object.hasOwn() [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
Метод hasOwn(instance, prop)  возвращает логическое значение, указывающее, содержит ли объект (instance) указанное свойство (prop). 
Данный метод заменяет устаревший метод hasOwnProperty()

### Object.freeze(obj) [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
Метод Object.freeze() замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости. Метод возвращает замороженный объект.

### Object.keys(obj) [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).