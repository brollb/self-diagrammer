/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 0.14.0 from webgme on Fri Jan 29 2016 20:56:07 GMT-0600 (CST).
 */

define([
    'plugin/PluginConfig',
    'plugin/PluginBase'
], function (
    PluginConfig,
    PluginBase) {
    'use strict';

    /**
     * Initializes a new instance of Diagrammer.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin Diagrammer.
     * @constructor
     */
    var Diagrammer = function () {
        // Call base class' constructor.
        PluginBase.call(this);
    };

    // Prototypal inheritance from PluginBase.
    Diagrammer.prototype = Object.create(PluginBase.prototype);
    Diagrammer.prototype.constructor = Diagrammer;

    /**
     * Gets the name of the Diagrammer.
     * @returns {string} The name of the plugin.
     * @public
     */
    Diagrammer.prototype.getName = function () {
        return 'Diagrammer';
    };

    /**
     * Gets the semantic version (semver.org) of the Diagrammer.
     * @returns {string} The version of the plugin.
     * @public
     */
    Diagrammer.prototype.getVersion = function () {
        return '0.1.0';
    };

    /**
     * Main function for the plugin to execute. This will perform the execution.
     * Notes:
     * - Always log with the provided logger.[error,warning,info,debug].
     * - Do NOT put any user interaction logic UI, etc. inside this method.
     * - callback always has to be called even if error happened.
     *
     * @param {function(string, plugin.PluginResult)} callback - the result callback
     */
    Diagrammer.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            nodeObject;


        // Using the logger.
        self.logger.debug('This is a debug message.');
        self.logger.info('This is an info message.');
        self.logger.warn('This is a warning message.');
        self.logger.error('This is an error message.');

        // Using the coreAPI to make changes.

        nodeObject = self.activeNode;

        self.core.setAttribute(nodeObject, 'name', 'My new obj');
        self.core.setRegistry(nodeObject, 'position', {x: 70, y: 70});


        // This will save the changes. If you don't want to save;
        // exclude self.save and call callback directly from this scope.
        self.save('Diagrammer updated model.', function (err) {
            if (err) {
                callback(err, self.result);
                return;
            }
            self.result.setSuccess(true);
            callback(null, self.result);
        });

    };

    return Diagrammer;
});