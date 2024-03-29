const extractSpecialAttacks = require('../app');

describe('extractSpecialAttacks function', () => {
    test('следует извлекать специальные атаки с описанием по умолчанию, если описание отсутствует', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const result = extractSpecialAttacks(character);

        expect(result).toEqual([
            { id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...' },
            { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...' }
        ]);
    });

    test('следует извлекать специальные атаки с описанием по умолчанию, когда все описания отсутствуют', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const result = extractSpecialAttacks(character);

        expect(result).toEqual([
            { id: 8, name: 'Двойной выстрел', description: 'Описание недоступно', icon: 'http://...' },
            { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...' }
        ]);
    });
});