#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CdkapigwredirectStack } from '../lib/cdkapigwredirect-stack';

const app = new App();
new CdkapigwredirectStack(app, 'CdkapigwredirectStack');
