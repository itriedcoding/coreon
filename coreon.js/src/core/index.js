// src/core/index.js

import EventBus from './eventBus';
import StateManager from './stateManager';
import Router from './router';
import Component from './component';
import Lifecycle from './lifecycle';
import PluginManager from './pluginManager';
import DependencyInjector from './dependencyInjector';
import ErrorHandler from './errorHandler';
import Logger from './logger';

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