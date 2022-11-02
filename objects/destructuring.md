**Деструктуризация (destructuring)** — специальный синтаксис, позволяющий извлекать части из составных данных. Это удобный способ раскладывать объекты на части. Он позволяет сократить код и сделать его более понятным.

    const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };
    const { firstName, manager } = person;

    console.log(firstName); // => 'Rasmus'
    console.log(manager); // => true

При деструктуризации можно **переименовывать имена**. Такое бывает нужно, если подобная константа уже определена выше.

    const user = { name: 'John Doe', age: 34 };
    const { name: userName, age: userAge } = user;

Деструктуризация может быть вложенной. Она позволяет извлекать части объектов на любую глубину.

    const user = {
        johnDoe: { 
         age: 34,
         email: 'johnDoe@freeCodeCamp.com'
        }
    };

    const { johnDoe: { age: userAge, email: userEmail }} = user;

У spread оператора есть похожий, но выполняющий обратное действие оператор, называемый rest. С его помощью во время деструктуризации можно собрать все "оставшиеся" свойства в один объект:

    const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };

    const { name, ...rest } = user;

    console.log(rest);
    // => { email: 'support@hexlet.io', age: 44 }