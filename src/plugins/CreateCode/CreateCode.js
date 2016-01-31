/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 0.14.0 from webgme on Sat Jan 30 2016 17:20:08 GMT-0600 (CST).
 */

define([
    'TemplateCreator/TemplateCreator',
    './JavaGenerator',
    './JSGenerator'
], function (
    PluginBase,
    JavaGenerator,
    JSGenerator
) {
    'use strict';

    /**
     * Initializes a new instance of CreateCode.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin CreateCode.
     * @constructor
     */
    var CreateCode = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.generator = null;
        this.generators = {
            Java: new JavaGenerator(),
            JavaScript: new JSGenerator()
        };
    };

    // Prototypal inheritance from PluginBase.
    CreateCode.prototype = Object.create(PluginBase.prototype);
    CreateCode.prototype.constructor = CreateCode;

    /**
     * Gets the name of the CreateCode.
     * @returns {string} The name of the plugin.
     * @public
     */
    CreateCode.prototype.getName = function () {
        return 'CreateCode';
    };

    /**
     * Gets the semantic version (semver.org) of the CreateCode.
     * @returns {string} The version of the plugin.
     * @public
     */
    CreateCode.prototype.getVersion = function () {
        return '0.1.0';
    };

    CreateCode.prototype.getConfigStructure = function () {
        return [
            {
                name: 'language',
                displayName: 'Target Language',
                description: '',
                value: '',
                valueType: 'string',
                valueItems: Object.keys(this.generators),
                readOnly: false
            }
        ];
    };

    CreateCode.prototype.main = function (callback) {
        var language = this.getCurrentConfig().language;
        this.generator = this.generators[language];
        PluginBase.prototype.main.call(this, callback);
    };

    return CreateCode;
});