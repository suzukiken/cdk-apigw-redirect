import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class CdkapigwredirectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const PREFIX_NAME = id.toLocaleLowerCase().replace('stack', '')
    
    const api = new apigateway.RestApi(this, 'api', { 
      restApiName: PREFIX_NAME + '-api',
    });
    
    const integration = new apigateway.MockIntegration({
      passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
      requestTemplates: {
        'application/json': JSON.stringify({
          statusCode: 200
        })
      },
      integrationResponses: [{
        statusCode: '302',
        responseParameters: {
          'method.response.header.Location': "'https://www.google.com'"
        }
      }]
    })
    
    api.root.addMethod('GET', integration, {
      methodResponses: [{
        statusCode: '302',
        responseParameters: {
          'method.response.header.Location': true
        }
      }]}
    )
  }
}
