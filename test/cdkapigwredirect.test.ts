import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Cdkapigwredirect from '../lib/cdkapigwredirect-stack';

test('Empty Stack', () => {
    const app = new App();
    // WHEN
    const stack = new Cdkapigwredirect.CdkapigwredirectStack(app, 'MyTestStack');
    // THEN
    const template = Template.fromStack(stack);
    template.templateMatches({
      "Resources": {}
    });
});
