define([
    'TemplateCreator/templates/Constants',
    'TemplateCreator/outputs/OutputGenerator'
], function(
    Constants,
    OutputGenerator
) {
    'use strict';
    var JSGenerator = function() {
        this.template = {
            Class: '{{ if (' + Constants.NEXT + '.length ) {}}{{= name }}' +
            '.prototype = Object.create({{= ' + Constants.NEXT + '[0].name }}.prototype);{{ } }}\n' +
            'function {{= name }} () {\n\t// TODO: Create code for {{= name }} here!\n}\n\n'
                
        };
    };

    _.extend(JSGenerator.prototype, OutputGenerator.prototype);

    JSGenerator.prototype.createOutputFiles = function(root) {
        var result = {};

        result[root.name + '.js'] = this.createTemplateFromNodes(root[Constants.CHILDREN]);
        return result;
    };

    return JSGenerator;
});
