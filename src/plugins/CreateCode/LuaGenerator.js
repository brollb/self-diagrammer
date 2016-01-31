define([
    'TemplateCreator/templates/Constants',
    'TemplateCreator/outputs/OutputGenerator'
], function(
    Constants,
    OutputGenerator
) {
    'use strict';
    var LuaGenerator = function() {
        this.template = {
            Class: '{{= name }} ={{ if (' + Constants.PREV + '.length ) {}}' +
            '{{= ' + Constants.PREV + '[0].name }}:new() {{ } else { }} {}{{ } }}\n' +
            'function {{= name }}:new()\n\t' + [
                'local obj = {}',
                '-- TODO: Create code for {{= name }} here!',
                'self.__init = self',
                'return setmetatable(obj, self)'
            ].join('\n\t') + '\nend\n\n'
                
        };
    };

    _.extend(LuaGenerator.prototype, OutputGenerator.prototype);

    LuaGenerator.prototype.createOutputFiles = function(root) {
        var result = {};

        result[root.name + '.lua'] = this.createTemplateFromNodes(root[Constants.CHILDREN]);
        return result;
    };

    return LuaGenerator;
});
