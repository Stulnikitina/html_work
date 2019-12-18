'use strict';

QUnit.module('[Tree] tests:',  () => {
    QUnit.test('bad test', function (assert) {
        assert.strictEqual(tree(0), null);
        assert.strictEqual(tree(1), null);
        assert.strictEqual(tree(2), null);
        assert.strictEqual(tree('0'), null);
        assert.strictEqual(tree('1'), null);
        assert.strictEqual(tree('2'), null);
    });

    QUnit.test('height: 3', function (assert) {
        const expected =
            ' * \n' +
            '***\n' +
            ' | \n';
        assert.strictEqual(tree(3), expected);
        assert.strictEqual(tree('3'), expected);
    });

    QUnit.test('height: 4', function (assert) {
        const expected =
            '  *  \n' +
            ' *** \n' +
            '*****\n' +
            '  |  \n';
        assert.strictEqual(tree(4), expected);
        assert.strictEqual(tree('4'), expected);
    });

    QUnit.test('height: 5', function (assert) {
        const expected =
            '   *   \n' +
            '  ***  \n' +
            ' ***** \n' +
            '*******\n' +
            '   |   \n';
        assert.strictEqual(tree(5), expected);
        assert.strictEqual(tree('5'), expected);
    });

    QUnit.test('height: 8', function (assert) {
        const expected =
            '      *      \n' +
            '     ***     \n' +
            '    *****    \n' +
            '   *******   \n' +
            '  *********  \n' +
            ' *********** \n' +
            '*************\n' +
            '      |      \n';
        assert.strictEqual(tree(8), expected);
        assert.strictEqual(tree('8'), expected);
    });

    QUnit.test('height: 9', function (assert) {
        const expected =
            '       *       \n' +
            '      ***      \n' +
            '     *****     \n' +
            '    *******    \n' +
            '   *********   \n' +
            '  ***********  \n' +
            ' ************* \n' +
            '***************\n' +
            '       |       \n';
        assert.strictEqual(tree(9), expected);
        assert.strictEqual(tree('9'), expected);
    });

    QUnit.test('height: 20', function (assert) {
        const expected =
            "                  *                  \n" +
            "                 ***                 \n" +
            "                *****                \n" +
            "               *******               \n" +
            "              *********              \n" +
            "             ***********             \n" +
            "            *************            \n" +
            "           ***************           \n" +
            "          *****************          \n" +
            "         *******************         \n" +
            "        *********************        \n" +
            "       ***********************       \n" +
            "      *************************      \n" +
            "     ***************************     \n" +
            "    *****************************    \n" +
            "   *******************************   \n" +
            "  *********************************  \n" +
            " *********************************** \n" +
            "*************************************\n" +
            '                  |                  \n';
        assert.strictEqual(tree(20), expected);
        assert.strictEqual(tree('20'), expected);
    });
});
