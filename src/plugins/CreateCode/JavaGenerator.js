define([
    'TemplateCreator/templates/Constants',
    'TemplateCreator/outputs/OutputGenerator'
], function(
    Constants,
    OutputGenerator
) {
    'use strict';
    var JavaGenerator = function() {
        this.template = {
            Class: 'public class {{= name }} {{ if (' + Constants.NEXT + '.length ' +
                ') {}} extends {{= ' + Constants.NEXT + '[0].name }}{{ } }} {\n'+
                '\tpublic {{= name }} () {\n\t\t// TODO: Add behavior here!\n\t}\n}\n'
        };
    };

    _.extend(JavaGenerator.prototype, OutputGenerator.prototype);

    JavaGenerator.prototype.createOutputFiles = function(root) {
        var classes = root[Constants.CHILDREN],
            result = {},
            template;

        for (var i = classes.length; i--;) {
            template = _.template(this.template.Class);
            result[classes[i].name + '.java'] = template(classes[i]);
        }
        return result;
    };

    return JavaGenerator;
});
