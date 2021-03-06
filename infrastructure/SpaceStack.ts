import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';


export class SpaceStack extends Stack {

    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props)

        const lambdaFunction = new LambdaFunction(this, 'ByLambda', {
            runtime: Runtime.NODEJS_14_X,
            code: Code.fromAsset(join( __dirname, '..', 'services', 'init')),
            handler: 'init.main'
        })
    }

}