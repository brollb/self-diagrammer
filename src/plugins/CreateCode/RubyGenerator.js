define([
    'TemplateCreator/templates/Constants',
    'TemplateCreator/outputs/OutputGenerator'
], function(
    Constants,
    OutputGenerator
) {
    'use strict';
    var RubyGenerator = function() {
        this.template = {
            Class: 'class {{= name }} {{ if (' + Constants.PREV + '.length ) {}}' +
            '< {{= ' + Constants.PREV + '[0].name }}{{ } }}\n' + [
            '  def initialize()',
                '  # TODO: Create code for {{= name }} here!',
                'end'
            ].join('\n  ') + '\nend\n\n'
                
        };
    };

    _.extend(RubyGenerator.prototype, OutputGenerator.prototype);

    RubyGenerator.prototype.createOutputFiles = function(root) {
        var result = {};

        result[root.name + '.rb'] = this.createTemplateFromNodes(root[Constants.CHILDREN]);
        return result;
    };

    return RubyGenerator;
});
