#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkapigwredirectStack } from '../lib/cdkapigwredirect-stack';

const app = new cdk.App();
new CdkapigwredirectStack(app, 'CdkapigwredirectStack');
