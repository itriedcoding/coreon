// src/index.js

import EventBus from './core/eventBus';
import StateManager from './core/stateManager';
import Router from './core/router';
import Component from './core/component';
import Lifecycle from './core/lifecycle';
import PluginManager from './core/pluginManager';
import DependencyInjector from './core/dependencyInjector';
import ErrorHandler from './core/errorHandler';
import Logger from './core/logger';

const Coreon = {
    EventBus,
    StateManager,
    Router,
    Component,
    Lifecycle,
    PluginManager,
    DependencyInjector,
    ErrorHandler,
    Logger,
};

export default Coreon;